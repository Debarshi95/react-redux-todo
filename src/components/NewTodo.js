import React, { useState } from "react";
import { connect } from "react-redux";

function AddTodo(props) {
  const [initialValue, updateValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={e => updateValue(e.target.value)}
        value={initialValue}
      />
      <button
        type="submit"
        onClick={() => checkInput(initialValue, updateValue, props)}
      >
        Add
      </button>
    </div>
  );
}

const checkInput = (initialValue, updateValue, props) => {
  if (initialValue !== "") {
    props.dispatch({ type: "ADD_TODO", value: initialValue });
    updateValue("");
  } else {
    alert("Input cannot be empty");
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, null)(AddTodo);
