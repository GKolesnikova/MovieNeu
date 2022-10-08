import React from 'react';
import './App.css';
import useMovies from "./hooks/useMovies";
import MovieOverview from "./components/MovieOverview";
import CreateMovie from "./components/CreateMovie";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NavBar from "./components/NavBar";




export default function App() {

  const {movies, addMovie, deleteMovie}= useMovies()



  return (
      <div className="App">



          <HashRouter>
              <img src={" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU4g3O3dFVLoYQL4dHlzc_P00QOueiWkMHg&usqp=CAU"} alt="logo" />
              <h1>My cozy Library from Movie</h1>
              <NavBar/>
              <Routes>
                  <Route path={"/"} element={<MovieOverview movies = {movies} deleteMovie={deleteMovie}/>} />
                  <Route path={"/movie/:id"} element={<MovieDetailsPage  movie = {movies} />} />
                  <Route path={"/formular"} element={<CreateMovie  addMovie = {addMovie} />} />
              </Routes>
          </HashRouter>

      </div>
  );
}
