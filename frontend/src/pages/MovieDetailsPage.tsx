import {Movie} from "../model/Movie";
import {Link, useParams} from "react-router-dom";


export type MovieDetailsPageProps = {
    movies: Movie []
}


export default function MovieDetailsPage (props: MovieDetailsPageProps) {

    const params = useParams()
    const id = params.id

    if (id === undefined) {
        return (<>Movie not found!</>);
    }

     const movie = props.movies.find(movie => movie.id === parseInt(id))

     if (movie === undefined) {
        return (<>Movie not found!</>)
    }


    return (
        <div className={" "}>
            <Link to={"/"}> ❮ Back </Link>
            <h1>Your found Movie </h1>


            <div className={"movie"}>
                <div className={" id"}>ID des Movies : {movie.id}</div>
                <div className={" title"}><h2>{movie.title}</h2></div>
                <img className={" image"} src={movie.image}/>
                <div className={" author"}> {movie.author}</div>
                <div className={" comment"}><h3>Comment : "{movie.comment}"</h3></div>
            </div>

        </div>
    )






}
