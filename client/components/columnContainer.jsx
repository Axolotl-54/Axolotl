const React = require('react');
// need to import the cards
import CardContainer from '';
//need to import the actions
// import GetTasks from '../reducers/actionTypes.js'
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { Box, Grid, Text, Stack, Divider, Button, Card, Container} from '@chakra-ui/react'

const ColumnContainer = () => {
  return (
    <Container>
      <Card bg='tomato' m='10px' maxW = '200px' marginTop = '10px'>
        <Text>The Power of Friendship!</Text>
        <CardContainer />
      {/* Button to add  */}
      {/*looking up onclick functionality on React*/}
      {/* <Button onClick={GetTasks}>Add A List</Button> */}
      </Card>
    </Container>
    )
}

export default ColumnContainer;