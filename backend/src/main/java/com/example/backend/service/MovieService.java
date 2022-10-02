package com.example.backend.service;
import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    @Autowired
    public MovieService(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }


    public List<Movie> getAllMovies() {
        return movieRepo.getAllMovies();
    }

    public Movie addNewMovie(Movie newMovie) {
        return movieRepo.addMovie (newMovie.getId(), newMovie);
    }


    public Movie getMovieById(Integer id) {
        return MovieRepo.getMovieById (id)
                .orElseThrow( () -> new NoSuchElementException("Movie not found with id: " + id));
    }


    public Movie updateMovie (Integer id, Movie movie) {
        movieRepo.addMovie (id, movie);
        return movie;

    }


    public void deleteMovie(Integer id) {
        Optional<Movie> movie  = MovieRepo.getMovieById (id);

        if (movie.isEmpty()) {
            System.out.println("Movie was not really, it didn't exist in the fist place!");
        } else {
            MovieRepo.deleteMovie (id);
        }
    }



}
