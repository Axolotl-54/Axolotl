import axios from 'axios';
import * as api from './fetches.js'



export const getTasks = () => async(dispatch) => {
  try{
    const { data } = await api.fetchTasks();
    console.log('this is our data: ', data);
    dispatch({type: 'GET_TASKS', payload: data})
  } catch (error) {
    console.log({error: error.message})
  }
}


export const createTask = (task) => async(dispatch) => {
  try{
    // const { data } = await api.addTask(task);
    // console.log('this is our new task:', data);
    // dispatch({type: 'ADD_TASK', payload: data})
    let action;
    await axios.post('/api/createCard', task)
      .then((res) => {
        action = {type: 'ADD_TASK', payload: res.data}
      })
    dispatch(action);
  } catch (error) {
    console.log({error: error.message})
  }
}