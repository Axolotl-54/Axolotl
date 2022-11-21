const React = require('react');
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { Image, Flex, Card, CardHeader, Text, CardBody, CardFooter, Stack, Divider} from '@chakra-ui/react'


const NavBar = () => {
  return (
  <>
    <Flex 
    px='15px'
    alignItems='center' 
    justifyContent='space-evenly' 
    h='50px' 
    w='100%' 
    position='top' 
    bg='#00766C' 
    color='#ffdae8'
    pos='fixed-top'>
      {/* <Image src='https://cdn.dribbble.com/users/113499/screenshots/5794063/axolotl.png?compress=1&resize=400x300' /> */}
      <Text>TROLLO</Text>
      <Text>ABOUT</Text>
    </Flex>
  </>
  )
  
}



export default NavBar