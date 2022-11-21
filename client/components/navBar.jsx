const React = require('react');
import About from './about.jsx';
// we're importing the properties Stack, Card, and Container from Chakra-Ui
import { 
  Button,
  Image, 
  Flex, 
  Card, 
  CardHeader, 
  Text, 
  CardBody, 
  CardFooter, 
  Stack, 
  Divider, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react'

const NavBar = (isOpen, onOpen, onClose) => {
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
      {/* <Button onClick={onOpen}>ABOUT</Button>
      <Modal isOpen={isOpen}> */}
      <Text fontSize = {30}>ABOUT</Text>
      {/* <About /> */}
    </Flex>
  </>
  )
  
}



export default NavBar