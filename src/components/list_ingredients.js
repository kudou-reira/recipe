import React from 'react';

const IngredientProperties = (props) => {
  const ingredients = props.showList.split(',').map((ingredient, index) => {
    return (
      <div>
        <li key={index} className="list-group-item">
          {ingredient}
        </li>
      </div>
    );
  });

  return <ul>{ingredients}</ul>;

}

export default IngredientProperties;
