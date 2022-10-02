import React from 'react';
import './App.css';
import useMovies from "./hooks/useMovies";
import MovieOverview from "./components/MovieOverview";
import CreateMovie from "./components/CreateMovie";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from "./pages/MovieDetailsPage";




export default function App() {

  const {movies, addMovie, deleteMovie}= useMovies()



  return (
      <div className="App">
        <header className=" ">
          <img src={" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU4g3O3dFVLoYQL4dHlzc_P00QOueiWkMHg&usqp=CAU"} alt="logo" />
            <h1>My cozy Library from Movie</h1>
          <MovieOverview movies = {movies} deleteMovie={deleteMovie}/>
          <CreateMovie addMovie={addMovie} />
        </header>




          <HashRouter>
              <Routes>
                   <Route path={"/api/movie/:id"} element={<MovieDetailsPage movies = {movies} />} />
              </Routes>
          </HashRouter>
      </div>
  );
}
