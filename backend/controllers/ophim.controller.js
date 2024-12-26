import searchMovieOnOPhim from "../services/ophim.service.js";

export const getMovieFromOPhim = async (req, res) => {
    const { slug } = req.params;
    try {
        const movie = await searchMovieOnOPhim(slug);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found on OPhim" });
        }

        const episodes = movie.episodes || [];
        const videoUrl = episodes[0]?.link_embed || movie.trailer_url;

        if (videoUrl) {
            return res.json({ videoUrl });
        }
        return res.status(404).json({ message: "No video URL found for this movie" });
    } catch (error) {
        console.error("Error in getMovieFromOPhim:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};