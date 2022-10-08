package com.example.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "movies")
public class Movie {

    @Id
    private String id;

    private String title;
    private String image;
    private String author;
    private String comment;

}
