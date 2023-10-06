import React from 'react';
import { Link } from 'react-router-dom';
import MealPreviwGrid from '../components/mealPreviwGrid';

function Home({ meals_list }) {
  return (
    <div className='page'>
      <MealPreviwGrid meals_list={meals_list} />
      <div className="meal-list">
	  {meals_list.map((meal) => (
		<Link to={`/item/${meal.id}`} key={meal.id}>
		  <img src={meal.image_url} alt={meal.name} />
		</Link>
	  ))}
      </div>
    </div>
  );
}

export default Home;