// we need a use selector to get the state. State would hold an array of each column
// need to import react
import React from 'react';
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { 
  Card,
  Box, 
  CardHeader, 
  Text, 
  CardBody, 
  CardFooter, 
  Stack, 
  Divider, 
  Editable, 
  Accordion, 
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel} from '@chakra-ui/react'


//declaring our CardComponent variable
const CardComponent = ({ task }) => {
  return (
    <Card size = 'sm' variant = 'elevated' maxW = '300px' color = '#00766C'>
      <Stack direction='row' minHeight='50px' p = {3} >
        <Accordion allowToggle minWidth = '100%'>
          <AccordionItem >
            <AccordionButton>
              <Box flex = '1' textAlign = 'left'> {task.cardName} </Box>
            </AccordionButton>
            <AccordionPanel pb = {4}>
              {task.cardDescription}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Card>
  )
}

export default CardComponent;
