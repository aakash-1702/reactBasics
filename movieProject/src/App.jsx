import { useState, useEffect } from "react";
import { useDebounce } from "react-use";

import "./App.css";

import Search from "../components/search";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log("API Key:", API_KEY);
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deBoundSearchTerm, setDeBoundSearchTerm] = useState(searchTerm);

  useDebounce(() => setDeBoundSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch(
        query
          ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
          : `${BASE_URL}/discover/movie?sort_by=popularity.desc`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Movies data:", data);
      setMovieList(data.results);
    } catch (error) {
      console.log("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Use the debounced search term so API calls are delayed until typing stops
  useEffect(() => {
    fetchMovies(deBoundSearchTerm);
  }, [deBoundSearchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <div className="flex-justify-center">
          <img
            src="./hero.png"
            alt="hero image"
            width="40%"
            className="w-2/5 md-l20px"
          />
        </div>

        <div>
          <h1>
            Find <span className="text-gradient">movies</span> without hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <section className="all-movies">
          <h1 className="text-white">All movies</h1>
          {isLoading ? (
            <Loader />
          ) : errorMessage ? (
            <p className="text-white">{errorMessage}</p>
          ) : movieList.length === 0 ? (
            <p className="text-white">No movies found</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
