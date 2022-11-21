

let myState = {
  taskContainer: [],
  columnContainer: [],
}

export default (state = myState, action) => {
  switch (action.type) {
    case 'GET_COLUMNS':
      return state.columnContainer;
    case 'ADD_TASK':
      state.taskContainer.push(action.payload);
    case 'GET_TASKS':
      return state.taskContainer;
    case 'ADD_COLUMN':
      state.columnContainer.push(action.payload);
  }
}