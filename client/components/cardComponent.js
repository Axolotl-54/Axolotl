// we need a use selector to get the state. State would hold an array of each column
// need to import react
const React = require('react');
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { Card, CardHeader, Text, CardBody, CardFooter, Stack, Divider} from '@chakra-ui/react'


//declaring our CardComponent variable
const CardComponent = () => {
  return (
    <Card size = 'sm' variant = 'elevated' maxW = '300px' color = 'black'>
      <Stack direction='row' h='50px' p={4}>
        <Divider orientation='vertical' />
        <Text>Chakra UI</Text>
      </Stack>
    </Card>
  )
}
export default CardComponent;
