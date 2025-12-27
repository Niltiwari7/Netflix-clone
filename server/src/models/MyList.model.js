import mongoose from "mongoose";

const myListSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  movieId: {
    type: String,
    required: true
  },
  mediaType: {
    type: String,
    enum: ['movie', 'tv'],
    required: true
  }
}, {
  timestamps: true
})

// Prevent duplicate entries 
myListSchema.index({ profileId: 1, movieId:1}, { unique: true })

const MyList = mongoose.model('MyList', myListSchema)
export default MyList