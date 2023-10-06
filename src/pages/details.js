import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMealById } from "../services/mealtService"; 

function Detail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
      
    useEffect(() => {
        async function fetchMealDetails() {
          try {
            const mealDetails = await FetchMealById(id);
            setMeal(mealDetails);
          } catch (error) {
            console.error("Error al obtener detalles del producto: ", error);
          }
        }
      
        fetchMealDetails();
      }, [id]);

  return (
    <div>
      <h1>Detalles del producto</h1>
      {meal ? (
        <div>
          <img src={meal.image_url} alt={meal.name} /> {/* Cambio aquí */}
          <h2>{meal.name}</h2>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default Detail;