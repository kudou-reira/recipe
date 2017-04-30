import React from 'react';

const IngredientProperties = (props) => {
    
    //split array
    let ingArr = [];
    ingArr = props.showList.ingredients.split(',');
    //okay this works...props get passed
    console.log(ingArr);
    
    
    const ingrItems = ingArr.map((ingr, index) => {
        
        return(
            
            //add key  
            <div>
                <li key = {index} className = "list-group-item">

                    {ingr}

                </li>
            </div>
                                          
        );
        
    });
    
    

    return(
        
        <ul>
            {ingrItems}
        </ul>
    
    );
    
    
}

export default IngredientProperties;