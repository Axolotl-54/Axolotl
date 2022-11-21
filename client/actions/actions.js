import * as types from './actionTypes.js'
import axios from 'axios'



export const getTasks = () => async(dispatch) => {
  try{
    let action;
    await axios.get('api/getCards')
      .then(res => {
        action = {type: types.GET_TASKS, payload: res.data}
      })
      dispatch(action);
  } catch (error) {
    console.log({error: error.message})
  }
}