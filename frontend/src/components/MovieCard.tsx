import {Movie} from "../model/Movie";
import './MovieCard.css';



type MovieCardProps = {
    movie: Movie
    deleteMovie : (id: number) => void;

}

export default function MovieCard (props: MovieCardProps) {

    return (
        <div  className={"movieCardHaupt"}>
            <div className={"movieCard"}>
                <div className={"movieCard-foto"}>
                    <i className="cil-movie"></i>
                </div>
                <div className={"movie"}>
                    <button onClick={() => props.deleteMovie(props.movie.id)}>X</button>


                    <div className={" id"}>ID des Movies : {props.movie.id}</div>
                    <div className={" title"}><h2>{props.movie.title}</h2></div>
                    <img className={" image"} src={props.movie.image}/>
                    <div className={" author"}> {props.movie.author}</div>
                    <div className={" comment"}><h3>Comment : "{props.movie.comment}"</h3></div>
                </div>
            </div>
        </div>);
}
