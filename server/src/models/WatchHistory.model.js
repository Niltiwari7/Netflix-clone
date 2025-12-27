import mongoose from "mongoose";

const watchHistorySchema = new mongoose.Schema({
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
  },
  progress:{
    type: Number,
    default:0
  },
  duration: {
    type: Number,
  },
  lastWatchedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// One progress per profile per movie
watchHistorySchema.index({ profileId: 1, movieId:1}, { unique: true })

const WatchHistory = mongoose.model('WatchHistory', watchHistorySchema)
export default WatchHistory