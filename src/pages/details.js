import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from '../components/navbar';
import {FetchMealById} from '../services/mealtService';

function Detail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchMealById(id)
      .then((data) => {
        if (data) {
          setMeal(data);
        } else {
          setError('No se encontraron detalles de la comida.');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (!meal) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container'>
      <div className='navigationbar-container'>
        <Navbar />
      </div>
      <div className='all-container'>
        {error ? (
          <div className='error-message'>{error}</div>
        ) : (
          <div className='detail-container'>
            <div key={meal.idMeal} className='card-detail'>
              <div className='image-detail'>
                <div className='product-image-detail'>
                  {meal.strMealThumb ? (
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  ) : (
                    <p>No hay imagen disponible</p>
                  )}
                </div>
              </div>
              <div className='detail'>
                <h2>{meal.strMeal}</h2>
                <p>Categoría: {meal.strCategory}</p>
                <p>Área: {meal.strArea}</p>
                <p>Ingredientes: {meal.strIngredient1}, {meal.strIngredient2}, ...</p>
                <p>Instrucciones: {meal.strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;