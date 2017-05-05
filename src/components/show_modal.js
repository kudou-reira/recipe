import React from 'react';
import IngredientProperties from './list_ingredients';

const Example = (props) => {

  const { food, ingredients } = props.showFood

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        {food}
      </button>
      <div className="modal modal-transparent fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close">Ingredients</button>
              <h4 className="modal-title">{food}</h4>
            </div>
            <div className="modal-body">
              <p>
                <IngredientProperties showList={ingredients} />
              </p>
            </div>
            <div id="allFood" className="collapse" data-toggle="false">
              <div className="centerNow">
                <input className="form-control input-lg" type="text">
                  <textarea rows="2" cols="50" defaultValue={ingredients}></textarea>
                </input>
              </div>
            </div>
            {/* Use CSS styling margins/padding etc instead of <br> tags */}
            <br/>
            <div className="modal-footer">
              <br/>
              <button type="button" className="btn btn-default" data-toggle="collapse" data-target="#allFood">Edit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Example;
