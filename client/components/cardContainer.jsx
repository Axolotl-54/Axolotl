import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import CardComponent from './cardComponent';


const CardContainer = () => {
  // const dispatch = useDispatch();
  // const [taskData, setTaskData] = useState({
  //   newCardName: '',
  //   newCardAssigned: '', 
  //   newCardDescription: '', 
  //   newCardCategory: '' 
  // })

  // useEffect(() => {
  //   dispatchEvent(getTasks());
  // }, [dispatch])

  // let myOutput;
  // const testFetch = async () => {
  //   await axios.get('http://localhost:8080/api/createCard')
  //   .then(res => myOutput = res.data)
  // }
// *****Sara was here. I just looked at documentation*****
  return (
    <>
      <CardComponent />
      {/* <Button onClick={() => testPost()}>Trolling button</Button> */}
    </>
    

  )
}

export default CardContainer;