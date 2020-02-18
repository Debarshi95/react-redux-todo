import React from "react";
import { connect } from "react-redux";

function Todo({ todos, dispatch }) {
  return (
    <div>
      <h1>{todos.todo}</h1>
      <button
        type="submit"
        onClick={() => dispatch({ type: "DELETE_TODO", value: todos.id })}
      >
        DELETE
      </button>
    </div>
  );
}

export default connect()(Todo);
