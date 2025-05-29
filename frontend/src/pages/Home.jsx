import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error)
                setError("Failed to fetch popular movies. Please try again later.");
            }

            finally {
                setLoading(false);
            }
        };

        loadPopularMovies();

    } , []);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior such as clearing after submit button clicked
        if(!searchQuery.trim()) {
            return;
        }

        if(loading) {
            return; // Prevent multiple searches while loading
        }

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults); 
            setError(null); // Clear any previous errors

        } catch (error) {
            console.log(error);
            setError("Failed to fetch search results. Please try again later.");

        } finally {
            setLoading(false);
        }
    };

    return <div className ="home">
        <form onSubmit = {handleSearch} className = "search-form">
            <input 
                type = "text" 
                placeholder = "Search for a movie..."
                className = "search-input"
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className = "search-button">
                Search
            </button>
        </form>

        {error && <div className = "error-message">{error}</div>}

        {loading ?  ( <div className = "loading">Loading...</div> ) : (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie = {movie} key = {movie.id} />
            ))}
        </div>
    )}
    </div>
}

export default Home;