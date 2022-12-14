package com.example.backend.repo;
import com.example.backend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface MovieRepo extends MongoRepository<Movie, String> {


}
