import {Movie} from "../model/Movie";
import './MovieCard.css';
import {Link} from "react-router-dom";



type MovieCardProps = {
    movie: Movie
    deleteMovie : (id: number) => void;

}

export default function MovieCard (props: MovieCardProps) {

    return (
        <div  className={"movieCardHaupt"}>
            <div className={"movieCard"}>
                <Link to={"/movie/" + props.movie.id}>
                <div className={"movieCard-foto"}>
                    <i className="cil-movie"></i>
                </div>
                <div className={"movie"}>
                    <button onClick={() => props.deleteMovie(props.movie.id)}>X</button>


                    <div className={" id"}>ID des Movies : {props.movie.id}</div>
                    <div className={" title"}><h2>{props.movie.title}</h2></div>
                    <img className={" image"} alt={"Picher from Movie"} src={props.movie.image}/>
                    <div className={" author"}> {props.movie.author}</div>
                    <div className={" comment"}><h3>Comment : "{props.movie.comment}"</h3></div>
                </div>
                </Link>
            </div>
        </div>);
}
