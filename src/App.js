import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBox from "./components/searchBox";
import Home from "./pages/home";
import { FetchMealByFirstLetter } from "./services/mealtService";
import { Route, Routes } from "react-router-dom"; 
import Detail from "./pages/details";

function App() {
  const [meals, setMeals] = useState([]);
  const letter = "b";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const mealsData = await FetchMealByFirstLetter(letter);
        if (mealsData && mealsData.length > 0) {
          setMeals(mealsData);
        } else {
          console.error("No se encontraron comidas con la letra especificada.");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API: ", error);
      }
    }
    fetchMeals();
  }, [letter]);

  return (
    <div className="App">
      <Navbar>
        <SearchBox />
      </Navbar>
      <Routes> 
        <Route path="/" element={<Home meals_list={meals} />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes> 
    </div>
  );
}

export default App;