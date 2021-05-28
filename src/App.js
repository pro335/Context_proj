import React from "react";
import {MovieContext} from "./components/MovieContext";
import MovieList from "./components/MovieList";
import ChangeContext from "./components/ChangeContext";
function App() {
  return (
    <MovieContext>
      <ChangeContext />
      <MovieList />
    </MovieContext>
  );
}

export default App;