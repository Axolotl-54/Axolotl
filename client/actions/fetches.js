import axios from 'axios'

const url = '/api/getCards'

export const fetchTasks = () => axios.get(url);

export const addTask = (body) => {axios.post('/api/createCard',{
    newCardName: body.cardName,
    newCardDescription: body.cardDescription,
    newCardAssigned: body.cardAssigned,
    newCardCategory: body.cardCategory
    }
)}