import React from 'react';
import MealPreviw from '../mealPreview';
import './index.css';

const MealPreviwGrid = ({meals_list}) => {

	return (
		<div className='meal-grid'>
			{meals_list.map((meal) =>
				<MealPreviw key={meal.idMeal} meal={meal} />
			)}	
		</div>
	);
};

export default MealPreviwGrid;
