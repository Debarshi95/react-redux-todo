import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { connect } from "react-redux";
import Todo from "./components/Todo";

function App({ todos, dispatch }) {
  return (
    <div className="App">
      <button type="submit" onClick={() => deleteTodos(todos, dispatch)}>
        Delete all todos
      </button>
      <NewTodo />
      {todos.length > 0
        ? todos.map(todo => <Todo todos={todo} key={todo.id} />)
        : null}
    </div>
  );
}

const deleteTodos = (todos, dispatch) => {
  if (todos.length <= 0) {
    alert("No todos to delete");
  } else {
    dispatch({ type: "DELETE_ALL_TODOS" });
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(App);
