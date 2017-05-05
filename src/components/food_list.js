import React, {Component} from 'react';
import FoodProperties from './food_props';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    // export this array of object from another file.
    // and then import it into this file
    this.state = {
      food: [
        {
          key: 0,
          food: 'Pumpkin Pie',
          ingredients: 'Pumpkin Puree,Sweetened Condensed,Eggs,Spice,Pie'
        },
        {
          key: 1,
          food: 'Spaghetti',
          ingredients: 'Noodles,Tomato Sauce,(Optional) Meatballs'
        },
        {
          key: 2,
          food: 'Onion Pie',
          ingredients: 'Onion,Pie Crust,Sounds Yummy right?'
        }
      ],
      countFood: function() {
        return this.data.length
      }
    }
  };

  render() {
    return (
      <div>
        <div className="someDiv">
          <FoodProperties food={this.state.food}/>
        </div>
      </div>
    );
  }
}

export default FoodList;
