import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name:{
    type: String,
    required: true,
    trim: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  isKids: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'en'
  }
}, {
  timestamps: true
})
const Profile = mongoose.model('Profile', profileSchema)
export default Profile