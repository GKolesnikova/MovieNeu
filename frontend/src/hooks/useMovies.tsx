import {Movie} from "../model/Movie";
import {useEffect, useState} from "react";
import axios from "axios";



export default function useMovies() {


    const [movies, setMovies] = useState <Movie[]>([]);

      useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = () => {
        axios.get("/api/movie")
            .then(response => response.data)
            .then(data => setMovies(data))
            .catch(console.error)
    }

    const getMoviesById = (id: string) => {
        axios.get("/api/movie/" +id)
            .then(response => response.data)
            .then(data => setMovies(data))
            .catch(console.error)
    }

    const addMovie = (newMovie: Movie) => {
        return axios.post("/api/movie", newMovie)
            .then(response => response.data)
            .then(getAllMovies)
            .catch(console.error)
    }


    function deleteMovie (id: string) {
        return axios.delete("/api/movie/" + id)
            .then(getAllMovies)
            .catch(console.error)
    }



    return {movies,getMoviesById, addMovie, deleteMovie}
}
