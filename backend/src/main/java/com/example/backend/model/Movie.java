package com.example.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    private Integer id;
    private String title;
    private String image;
    private String author;
    private String comment;

}
