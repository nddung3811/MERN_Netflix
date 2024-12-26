import axios from "axios";

// services/ophim.service.js
const searchMovieOnOPhim = async (slug) => {
    try {
        const response = await axios.get(`https://ophim1.com/phim/${slug}`);
        if (response.data) {
            const movie = response.data;
            return {
                episodes: movie.episodes?.[0]?.server_data || [],
                trailer_url: movie.trailer_url,
                slug: movie.slug,
            };
        }
        return null;
    } catch (error) {
        console.error("Error fetching from OPhim:", error.message);
        return null;
    }
};


export default searchMovieOnOPhim;
