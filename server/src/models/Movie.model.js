import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  videoUrl: {
    type: String,
    required: true,
    trim: true
  },
  thumbnailUrl: {
    type: String,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  duration: {
    type: Number // duration in minutes
  },
  releaseDate: {
    type: Date
  }
}, {
  timestamps: true
})
 
const Movie = mongoose.model('Movie', movieSchema)
export default Movie