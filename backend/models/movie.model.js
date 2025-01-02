import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    tmdb_id: {
        type: String,
        required: true,
        unique: true,
    },
    linkEmbed: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');
export default Movie;
