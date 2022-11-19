import React from "react";
import CardComponent from 'client/components/cardComponent';
import { Button } from '@chakra-ui/react'
import axios from 'axios';

const CardContainer = () => {
  let myOutput;
  const testFetch = async () => {
    await axios.get('http://localhost:8080/api/createCard')
    .then(res => myOutput = res.data)
  }

  const testPost = async () => {
    await axios.post('http://localhost:8080/api/createCard', {
      newCardName: "corey"
    })
  }
  
  return (
    <CardComponent>
      <Button onClick={() => testPost()}>Trolling button</Button>
    </CardComponent>

  )
}