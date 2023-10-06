import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBox from "./components/searchBox";
import Home from "./pages/home";
import { FetchMealByFirstLetter } from "./services/mealtService";
import { Route, Routes } from "react-router-dom";
import { SearchMealByName } from "./services/mealtService";

import Detail from "./pages/details";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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

 	const handleSearch = async (term) => {
	try {
	  const searchResultsData = await SearchMealByName(term);
	  if (searchResultsData && searchResultsData.length > 0) {
		setSearchResults(searchResultsData);
	  } else {
		console.error("No se encontraron comidas con el nombre especificado.");
		setSearchResults([]);
	  }
	} catch (error) {
	  console.error("Error al buscar comidas: ", error);
	  setSearchResults([]);
	}
  };
  return (
    <div className="App">
      <Navbar>
        <SearchBox onSearch={handleSearch} />
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home meals_list={searchResults.length > 0 ? searchResults : meals} />
          }
        />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;