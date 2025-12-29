import RefreshToken from "../models/RefreshToken.model.js";
import User from "../models/User.model.js";
import { generateToken,generateRefreshToken } from "../utils/token.js";

export const registerUser = async(req,res)=>{
  try {
    const {email, password } = req.body;

    // Validate the input
    if(!email || !password) {
    return res.status(400).json({
      error:{
        message: 'Email and password are required',
        code : 'MISSING_FIELDS'
      }
    })
  }
    // Check if user already exists
    const existingUser = await User.exists({ email });
    if(existingUser) {
      return res.status(409).json({
        error: {
          message: 'User with this email already exists',
          code : 'USER_ALREADY_EXISTS'
        }
      })
    }

    // Hash the password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        email: newUser.email
      }
    })
  } catch (error) {
    console.error("Error while registering user:", error);
    return res.status(500).json({
      error:{
        message: 'Internal server error while registering user',
        code: 'INTERNAL_SERVER_ERROR'
      }
    })
  }
}

export const login = async(req,res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({email})

    if(!user) {
      return res.status(404).json({
        error: {
          message: 'User not found',
          code: 'USER_NOT_FOUND'
        }
      })
    }
   
    // verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(401).json({
        error: {
          message: 'Invalid credentials',
          code: 'INVALID_CREDENTIALS'
        }
      })
    }
    // generate tokens
    const accessToken = await generateToken({
      id: user._id,
      email: user.email
    })

    // Generate refresh token
    const refreshToken = generateRefreshToken({
    userId: user._id,
  })

  await RefreshToken.create({
    userId: user._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + (7*24*60*60*1000)), // 7 days
  })

    return res.status(200).json({
      message: 'Login successful',
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        email: user.email
      }
    })
  } catch (error) {
    console.error("Error while logging in:", error);
    return res.status(500).json({
      error:{
        message: 'Internal server error while logging in',
        code: 'INTERNAL_SERVER_ERROR'
      }
    })
  }
}

export const logout = async(req,res) => {
  const {refreshToken} = req.body;

  if(!refreshToken) {
    return res.status(400).json({
      error: {
        message: 'Refresh token is required',
        code: 'REFRESH_TOKEN_MISSING'
      }
    })
  }

  try {
    await RefreshToken.deleteMany({
      token: refreshToken
    })
    return res.status(200).json({
      message: 'Logged out successfully'
    })
  } catch (error) {
    console.error("Error while logging out:", error);
    return res.status(500).json({
      error: {
        message: 'Internal server error while logging out',
        code: 'INTERNAL_SERVER_ERROR'
      }
    })
  }
}