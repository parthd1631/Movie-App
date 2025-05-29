//MovieCard component to display movie and its details
//Add a prop to get info about the movie as an object such as release date, name
import "../css/MovieCard.css"; // Importing the CSS file for styling
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    // Function to handle favorite button click
    function onFavoriteClick(e) {
        e.preventDefault(); // Prevent default action of the button
        if (favorite) {
            removeFromFavorites(movie.id); // If already favorite, remove it
        } else {
            addToFavorites(movie); // If not favorite, add it
        }
    }

    return <div className="movie-card">
        <div className = "movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className = "movie-overlay">
                <button className = {`favorite-btn ${favorite ? "active" : ""}`} onClick = {onFavoriteClick}>
                    ♥︎
                </button>
            </div>
        </div>
        <div className = "movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

// Exporting the MovieCard component => if we want to access something from another file
export default MovieCard;