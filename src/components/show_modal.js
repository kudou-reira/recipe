import React, { Component } from 'react';
import IngredientProperties from './list_ingredients';

export default class Example extends Component {
  constructor(props) {
    super(props)
    const { food, ingredients } = props.item
    this.state = {
      food,
      ingredients
    }
  }

  handleClick({ food, ingredients }) {
    alert(food + ': \n' + ingredients);
  }

  render() {
    const { food, ingredients } = this.state
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => this.handleClick(this.props.item)}
        >
          {this.props.item.food}
        </button>
        {/* Add your modal to another file and import here. Pass props to it. */}
        {/* Use react-bootstrap for easy modals */}
        <div className="modal modal-transparent fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* This button does nothing */}
                <button type="button" className="close">Ingredients</button>
                <h4 className="modal-title">{food}</h4>
              </div>
              <div className="modal-body">
                <IngredientProperties showList={ingredients} />
              </div>
              <div id="allFood" className="collapse" data-toggle="false">
                <div className="centerNow">
                  <textarea rows="2" cols="50" defaultValue={ingredients}></textarea>
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
}
