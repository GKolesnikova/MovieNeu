import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";


type MovieOverviewProps = {
    movies: Movie[]
    deleteMovie : (id: number) => void;

}

export default function MovieOverview (props: MovieOverviewProps) {
    return <div>
        {props.movies.map(
            (movie) => <MovieCard   movie={movie}   deleteMovie={props.deleteMovie}/>)}
    </div>
}
