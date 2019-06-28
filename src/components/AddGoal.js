import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";

class AddGoal extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };
  //dispatch must always come before the event object lest you get errors
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const new_goal = {
      id: uuid.v4(),
      title: this.state.title
    };
    //dispatch the action to the reducer
    dispatch({
      type: "ADD_GOAL",
      payload: new_goal
    });

    //clear the form
    this.setState({ title: "" });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="row">
                <form
                  className="col s12"
                  onSubmit={this.handleSubmit.bind(this, dispatch)}
                >
                  <div className="row">
                    <div className="input-field s6">
                      <input
                        type="text"
                        placeholder="Enter a goal for the Year..."
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                      />
                      <input
                        type="submit"
                        value="Add Goal"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddGoal;
