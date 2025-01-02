	import express from "express";
	import {
		getMovieDetails,
		getMoviesByCategory,
		getMovieTrailers,
		getSimilarMovies,
		getTrendingMovie,
		getMovieEmbedLink,
	} from "../controllers/movie.controller.js";

	const router = express.Router();

	router.get("/trending", getTrendingMovie);
	router.get("/:id/trailers", getMovieTrailers);
	router.get("/:id/details", getMovieDetails);
	router.get("/:id/similar", getSimilarMovies);
	router.get("/:category", getMoviesByCategory);
	router.get("/:id/embed", getMovieEmbedLink);

	export default router;
