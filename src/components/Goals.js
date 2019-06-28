import React from "react";
import Goal from "./Goal";
import { Consumer } from "../context";
//context now works

const Goals = props => {
  return (
    <Consumer>
      {value => {
        const { goals } = value;
        return (
          <div className="container">
            {goals.length !== 0 ? (
              goals.map(goal => {
                return <Goal goal={goal} key={goal.id} />;
              })
            ) : (
              <h2>You dont have anymore goals</h2>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Goals;
