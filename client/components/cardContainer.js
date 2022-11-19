import React from "react";
import CardComponent from './/cardComponent';
import { Button } from '@chakra-ui/react'
import axios from 'axios';

const CardContainer = () => {
  const [taskData, setTaskData] = useState({
    newCardName: '',
    newCardAssigned: '', 
    newCardDescription: '', 
    newCardCategory: '' 
  })

  <Button OnClick = {setTaskData(...taskData, newCardName:)}></Button>

  // let myOutput;
  // const testFetch = async () => {
  //   await axios.get('http://localhost:8080/api/createCard')
  //   .then(res => myOutput = res.data)
  // }

  const addATask = async () => {
    await axios.post('/api/createCard', {
      newCardName: "corey"
    })
    .then(res => {console.log(res.data)})
  }
  
  return (
    <>
      <CardComponent />
      {/* <Button onClick={() => testPost()}>Trolling button</Button> */}
    </>
    

  )
}

export default CardContainer;