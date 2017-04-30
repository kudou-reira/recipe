import React from 'react';
import ReactDOM from 'react-dom';

import FoodList from './components/food_list';


const App = () => {
    
        return (
            <div>
                <div className = "recipeTitle">Recipe List!</div>
                <FoodList />
            </div>
        );
}


ReactDOM.render(<App /> , document.querySelector('.container'));
