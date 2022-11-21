import axios from "axios";
import exports from "webpack";


export const GET_COLUMNS = 'GET_COLUMNS';
export const ADD_TASK = 'ADD_TASK';
export const GET_TASKS = 'GET_TASKS';
export const ADD_COLUMN = 'ADD_COLUMN';


export const getTasks = () => async(dispatch) => {
  try{
    let action;
    await axios.get(url)
      .then(res => {
        action = {type: 'GET_TASKS', payload: res.data}
      })
      dispatch(action);
  } catch (error) {
    console.log({error: error.message})
  }
}