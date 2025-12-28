import jwt from 'jsonwebtoken';

export const generateToken = async(payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  });
  return token;     
}

export const generateRefreshToken = async(payload) => {
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d'
  });
  return refreshToken;     
}
  