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