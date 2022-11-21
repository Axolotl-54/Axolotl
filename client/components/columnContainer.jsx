const React = require('react');
// need to import the cards
import CardContainer from './cardContainer.jsx';
//need to import the actions
// import GetTasks from '../reducers/actionTypes.js'
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { HStack, Card, CardHeader, Editable, EditablePreview, EditableInput} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from '../actions/actions'
import {AddIcon} from '@chakra-ui/icons'

const ColumnContainer = () => {
  const dispatch = useDispatch();

  

  return (
    <Card bg = '#00766C' variant = 'elevated' w='90%' marginTop = {3}>
      <CardHeader>
        <Editable color = '#fffff2' fontSize = '28px'defaultValue = 'Dashboard'>
          <EditablePreview/>
          <EditableInput/>
        </Editable>
      </CardHeader>
      <HStack  spacing = '15px' p = {6} alignItems = 'center'>
        <CardContainer/>
        <AddIcon w = {6} h = {6} color = '#fffff2'/>
      </HStack>
    </Card>
    )
}

export default ColumnContainer;