import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim:true
  },
  email : {
    type: String,
    unique: true,
    lowercase: true,
    trim:true
  },
  password: {
    type:String,
    required:true
  },
  image: {
    type: String,
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  favoritesIds : {
    type: [String],
    default: []
  },
 accounts: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  }
],
sessions: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
  }
]
}, { timestamps: true })

userSchema.pre('findOneAndDelete', async function (next) {
  const user = await this.model.findOne(this.getFilter())

  if (user) {
    await mongoose.model('Account').deleteMany({ userId: user._id })
    await mongoose.model('Session').deleteMany({ userId: user._id })
  }

  next()
})

const User = mongoose.model('User', userSchema)
export default User