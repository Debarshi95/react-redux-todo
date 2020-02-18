const initialState = {
  todos: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: state.todos.concat({
          id: state.todos.length + 1,
          todo: action.value
        })
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.value)
      };
    }
    case "DELETE_ALL_TODOS": {
      return {
        ...state,
        todos: []
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
