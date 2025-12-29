import mongoose from "mongoose";

const verificationTokenSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    index: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true
})
const VerificationToken = mongoose.model('VerificationToken', verificationTokenSchema)
export default VerificationToken