import React from 'react';
import MealPreviwGrid from '../components/mealPreviwGrid';

function Home({meals_list}) {
	return (
		<div className='page'>
			<MealPreviwGrid meals_list={meals_list}/>
		</div>
	);
}

export default Home;
