import React from 'react';
import Example from './show_modal';

const FoodProperties = (props) => {
    
    const foodItems = props.foodStuff.map((data1, index) => {
        
        return(
            
            //add key  
            
            <li key = {data1.key} className = "list-group-item">
                                          
                        <Example showFood = {data1} />
                        {console.log("check")}
                                        
            </li>
                                          
        );
        
    });
    

    return(
        
        <ul>
            {foodItems}
            {console.log(foodItems)}
        </ul>
    
    );
    
    
}

export default FoodProperties;