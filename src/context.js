import React, { Component } from "react";

const Context = React.createContext();

//define reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload]
      };
    case "DELETE_GOAL":
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    goals: [
      { id: 1, title: "read 50 books this year" },
      { id: 2, title: "master react this year" },
      { id: 3, title: "master Node and Express this year" },
      { id: 4, title: "master vue this year" },
      { id: 5, title: "master angular this year" }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
