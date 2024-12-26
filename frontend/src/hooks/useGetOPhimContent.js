import { useState, useEffect } from "react";
import axios from "axios";

const useGetOPhimContent = (slug) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`/api/v1/ophim/${slug}`);
                console.log("Dữ liệu nhận được từ API OPhim:", response.data); // Log toàn bộ dữ liệu từ API
                setMovie(response.data.videoUrl);
            } catch (err) {
                console.error("Lỗi khi gọi API OPhim:", err.message); // Log lỗi chi tiết
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [slug]);

    return { movie, loading, error };
};

export default useGetOPhimContent;
