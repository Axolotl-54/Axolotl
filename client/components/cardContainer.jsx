import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from './cardComponent.jsx' ;
import { Stack, VStack, StackDivider, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import { getTasks } from '/client/actions/actions.js'
//we're importing the form file
import Form from './form.jsx';
import axios from 'axios'

import useUpdateEffect from '../utility/updatedUseEffect'


const CardContainer = () => {
  // grabbing array of tasks from state, have to get state from the index.js file because it imports TaskReducer
  const dispatch = useDispatch()
  // dispatch(getTasks());
  // const tasks = useSelector((state) => state.TaskReducer.taskContainer);

  useEffect(() => {
    // fetch get from db and send to redux store
    dispatch(getTasks())
  }, [dispatch])

  const tasks = useSelector((state) => state.TaskReducer.taskContainer);
  console.log('these are our tasks: ', tasks);
  
  
  return ( 
      <Card bg='#fffff2' minW = '300px' p = '10px'>
        <CardHeader> To Do List </CardHeader>
        <VStack 
        divider = {<StackDivider/>}
        spacing = {2}
        align= 'stretch'
      >
        {tasks.map((task) => (
          <CardComponent key = {task._id} task = {task}/>
        ))}
        <Popover colorScheme = 'green'>
          <PopoverTrigger>
            <Button colorScheme = 'pink' variant = 'ghost'>Add Task</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverHeader> Create Task </PopoverHeader>
            <PopoverBody> fill out form here 
              <Form />
            </PopoverBody>
          </PopoverContent>
        </Popover>

      </VStack>
      </Card>
    )
}

export default CardContainer;