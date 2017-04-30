import React from 'react';
import IngredientProperties from './list_ingredients';


const Example = (props) => {

        console.log("hi");
        const food1 = props.showFood.food;
        const ingred1 = props.showFood.ingredients;
        const placeHold = props.showFood;
    
        const editFood = '';
    
        return (
            
            <div className ="container">
              
              <button type="button" className ="btn btn-info" data-toggle="modal" data-target="#myModal">{food1}</button>


              <div className ="modal modal-transparent fade" id="myModal" role="dialog">
                <div className ="modal-dialog">

                  <div className ="modal-content">
                    <div className ="modal-header">
                      <button type="button" className ="close">Ingredients</button>
                      <h4 className="modal-title">{food1}</h4>
                    
                    </div>
                    <div className ="modal-body">
                      <p><IngredientProperties showList = {placeHold} /></p>
                      {console.log(ingred1)}
                    </div>

                    
                    <div id= "allFood" className = "collapse" data-toggle = "false">
                        <div className = "centerNow">
                            <input className = "form-control input-lg" type = "text">
                                <textarea rows="2" cols="50" defaultValue = {ingred1}>
                                </textarea>
                            </input>
                        </div>
                    </div>

                    <br />
                    

                    <div className ="modal-footer">
                    
                    <br />
                    <button type="button" className ="btn btn-default" data-toggle="collapse" data-target="#allFood">Edit</button>
                      
                      
                      <button type="button" className ="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    
                  </div>

                </div>
              </div>

            </div>
            

       );
        

    
}

export default Example;

