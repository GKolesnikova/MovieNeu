import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";
import {useState} from "react";


type MovieOverviewProps = {
    movies: Movie[]
    deleteMovie : (id: number) => void;

}

export default function MovieOverview (props: MovieOverviewProps) {

    const [filterText, setFilterText] = useState("")
    const filteredMovies = props.movies.filter( (movie) => movie.title.toLowerCase().includes(filterText.toLowerCase()))


    return <div>

        <input className={" "} onChange={(event) => setFilterText(event.target.value)} />
        <p>Typed in: {filterText}</p>


        { filteredMovies.length === 0 ?   // {filteredCharacters.length === 0 && <h1>Please insert something!</h1>}
            <h1>Movie ist leider nicht gefunden...</h1>
            :
            <div className={" "}>
                {filteredMovies.map ((movie) =>
                    <div className={" "}>
                        <MovieCard   movie={movie}   deleteMovie={props.deleteMovie}/>
                    </div>)}
            </div>
        }


        {props.movies.map(
            (movie) => <MovieCard   movie={movie}   deleteMovie={props.deleteMovie}/>)}

    </div>
}
