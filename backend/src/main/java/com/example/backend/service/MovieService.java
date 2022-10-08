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
        return movieRepo.findAll();
    }

    public Movie addNewMovie(Movie newMovie) {
        return movieRepo.save (newMovie);
    }


    public Movie getMovieById(String id) {
        return movieRepo.findById (id)
                .orElseThrow( () -> new NoSuchElementException("Movie not found with id: " + id));
    }


    public Movie updateMovie (String id, Movie movie) {
        movieRepo.save (movie);
        return movie;

    }


    public void deleteMovie(String id) {
        Optional<Movie> movie  = movieRepo.findById (id);

        if (movie.isEmpty()) {
            System.out.println("Movie was not really, it didn't exist in the fist place!");
        } else {
            movieRepo.deleteById (id);
        }
    }



}
