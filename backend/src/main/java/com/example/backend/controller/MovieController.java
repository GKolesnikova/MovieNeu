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
    public Movie addNewMovie(@RequestBody Movie newMovie){
        return movieService.addNewMovie (newMovie);
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable Integer id ){
        return movieService.getMovieById(id);
    }

    @PutMapping(path = "/{id}")
    public Movie updateMovie (@PathVariable Integer id, @RequestBody Movie movie) {
        return movieService.updateMovie (id, movie);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable Integer id){
        movieService.deleteMovie(id);
    }

}
