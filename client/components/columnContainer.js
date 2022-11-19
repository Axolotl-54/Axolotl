const React = require('react');
// need to import the cards
import CardContainer from './/cardContainer';
//need to import the navBar
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { Box, Grid, Text, Stack, Divider, Button} from '@chakra-ui/react'

const ColumnContainer = () => {
  return (
    <div>
      <Box bg='tomato' m='10px' maxW = '200px' marginTop = '10px'>
        <Text>The Power of Friendship!</Text>
        <CardContainer />
      {/* Button to add  */}
      <Button>Add A List</Button>
      </Box>
    </div>
    )
}

export default ColumnContainer;