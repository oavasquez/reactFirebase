import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    
    
    return (
      <div key="toDoName" >
        <h4>
          {todo.title}{" "}
       
          <button
            onClick={() => this.handleCompleteClick(todoId)}
          >
            <i >Listo</i>
          </button>
        </h4>
      </div>
    );
  }
}

export default connect(null, { completeToDo })(ToDoListItem);