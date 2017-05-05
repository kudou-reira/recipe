import React from 'react';
import Example from './show_modal';

const FoodProperties = (props) => {

  const foodItems = props.foodStuff.map((data1, index) => {
    return (
      <li key={index} className="list-group-item">
        <Example showFood={data1}/>
      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
