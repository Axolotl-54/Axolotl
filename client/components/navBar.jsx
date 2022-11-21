const React = require('react');
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { Image, Flex, Card, CardHeader, Text, CardBody, CardFooter, Stack, Divider} from '@chakra-ui/react'

const NavBar = () => {
  return (
  <>
    <Flex
      className='navbar' 
      px='28px'
      justifyContent='space-between'
      alignItems='center' 
      h='50px' 
      w='100%' 
      position='top' 
      bg='#00766C' 
      color='#ffdae8'
      pos='fixed-top'>
      <Image 
        src='https://lh3.googleusercontent.com/TCqvJ-s2KUMZoFaNS3hVBTaRqkdW4GwO6V-aAvpZ-7v8qinOq-jbPhRt4icQB6gM1755HgEzFIoQozAxcNhWd0c888vC5jgADh6MWwLMqT0_7CvseTxho88nfiAH7xLOmz79hyci=w2400' 
        h='80%'
      />
      <Text fontSize = {40}>TROLLO</Text>
      <Text fontSize = {30}>ABOUT</Text>
    </Flex>
  </>
  )
  
}



export default NavBar