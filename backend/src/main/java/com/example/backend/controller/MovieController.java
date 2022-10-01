package com.example.backend.controller;
import com.example.backend.model.Movie;
import com.example.backend.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/movie")
public class MovieController {

    private final MovieService movieService;


    public MovieController(MovieService bookService) {
        this.movieService  = bookService;
    }


    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie newMovie){
        return movieService.addMovie(newMovie);
    }







}
