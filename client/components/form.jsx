import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Input } from '@chakra-ui/react'
import { addTask } from '../actions/fetches';
import { useDispatch } from 'react-redux';
import { createTask } from '../actions/actions.js'

const Form = () =>{
  const [taskData, setTaskData] = useState({
    cardName: '', cardDescription: '', cardAssigned: '', cardCategory: ''
  })
  const dispatch = useDispatch();
  async function handleSubmit(event){
    const data = {cardName: document.getElementById('cardName').value,
    cardDescription: document.getElementById('cardDescription').value,
    cardAssigned: document.getElementById('cardAssigned').value,
    cardCategory: document.getElementById('cardCategory').value
  };
    
    addTask(data)
  }
   
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Task Name</FormLabel>
        <Input type='text' id="cardName" />
      </FormControl>
      <FormControl>
        <FormLabel>Task Description</FormLabel>
        <Input type='text' id="cardDescription" />
        <FormLabel>Category</FormLabel>
        <Input type='text' id="cardCategory" />
        <FormLabel>Created by</FormLabel>
        <Input type='text' id="cardAssigned" />
        <Button type='submit'>Create Task</Button>
      </FormControl>
      </form>
    </div>
  )
}

export default Form;
