

const myState = {
  taskContainer: [],
  columnContainer: [],
}

export default (state = myState, action) => {
  let newState;
  switch (action.type) {
    case 'GET_COLUMNS':
      return state.columnContainer;
    case 'ADD_TASK':
      state.taskContainer.push(action.payload);
    case 'GET_TASKS':
      // assuming payload 
      newState = {
        columnContainer: state.columnContainer,
        taskContainer: action.payload,
      }
      return newState;
    case 'ADD_COLUMN':
      state.columnContainer.push(action.payload);
    default:
      return state;
  }
}