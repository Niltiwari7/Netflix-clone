import mongoose from 'mongoose'

const userScheama = new mongoose.Schema({
  email : {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim:true
  },
  password: {
    type:String,
    required:true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },

}, { timestamps: true })

const User = mongoose.model('User', userScheama)
export default User