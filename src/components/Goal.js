import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import PropTypes from "prop-types";

class Goal extends Component {
  handleDelete(dispatch, id) {
    dispatch({
      type: "DELETE_GOAL",
      payload: id
    });
  }

  render() {
    const { goal } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <ul className="collection">
                <li className="collection-item">
                  {goal.title}
                  <Link to="/" className="secondary-content">
                    <i className="material-icons edit">edit</i>
                  </Link>
                  <Link to="/" className="secondary-content">
                    <i
                      //always include 'this' as the first augument lest you get an error;
                      onClick={this.handleDelete.bind(this, dispatch, goal.id)}
                      className="material-icons delete"
                    >
                      delete
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Goal.propTypes = {
  goal: PropTypes.object.isRequired
};

export default Goal;
