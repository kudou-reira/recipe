import React, { Component } from 'react';
import FoodProperties from './food_props';

class FoodList extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.state = {
            
            data: [
                {
                    key: 0,
                    food: 'Pumpkin Pie',
                    ingredients: 'Pumpkin Puree, Sweetened Condensed, Eggs, Spice, Pie'
                },
                
                {
                    key: 1,
                    food: 'Spaghetti',
                    ingredients: 'Noodles, Tomato Sauce, (Optional) Meatballs'
                },
                
                {
                    key: 2,
                    food: 'Onion Pie',
                    ingredients: 'Onion, Pie Crust, Sounds Yummy right?'
                }
                
            ],
            countFood: 3
            
        }
          
    };
    
      
    
    render() {
        
        return (
        
            <div>
                  <div className = "someDiv">
                        <FoodProperties foodStuff = {this.state.data} />
                        {console.log[this.state.data[0].ingredients.split(',')]}
                        
                  </div>
                
            </div>
        );
    }
}

export default FoodList;