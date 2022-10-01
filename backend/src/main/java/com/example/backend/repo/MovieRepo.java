package com.example.backend.repo;
import com.example.backend.model.Movie;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MovieRepo {

    Map<String, Movie> movies = new HashMap<>(
            Map.of(
                    "1", new Movie (1, "Zootropolis", "  https://www.themoviedb.org/t/p/w440_and_h660_face/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg", "Disney", "Super interessant!"),
                    "2", new Movie (2, "The Blind Side", "https://www.joblo.com/wp-content/uploads/2010/03/blind-side-international-poster-1-768x1151.jpg", "John Hancock ", "Super!.."),
                    "3", new Movie (3, "Vice-Versa", " https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/f5ec1b17-ee37-4270-a04d-0bcc5b727459/3840x  ", "Disney and Pixar", "Ein sehr schöner Film!"),
                    "4", new Movie (4, "The Croods Family", "  https://cdn-canjg.nitrocdn.com/KeeHDfuOLUNGyllDLfhEDuzfiRKMAJBA/assets/static/source/rev-02d61c3/wp-content/uploads/2021/03/Crood-Featured.png", "Joel Crawford", "Seehr lustig! =)"),
                    "5", new Movie (5, "Toy Story", "https://static.miraheze.org/greatestmovieswiki/thumb/6/68/Toy_Story_Poster.jpg/660px-Toy_Story_Poster.jpg", "John Lasseter", "Super Film! Man kann daraus viel lernen..)")
            )


    );

    public List<Movie> getAllMovies() {
        return new ArrayList<>(movies.values());
    }


    public Movie addMovie(Integer id, Movie newMovie) {
        movies.put (String.valueOf(id), newMovie);
        return newMovie;
    }
}
