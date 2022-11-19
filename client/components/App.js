import React, {Component} from "react";
import CardComponent from '/client/components/cardComponent.js';
import  { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import '../styles/styles.scss';

//theme variable like CSS, but for the chakra components
const theme = extendTheme({
    
    fontSizes: {
        lg: '18px',
      },
      colors: {
        gray: {
          100: '#fafafa',
          200: '#f7f7f7',
        },
    },
})


function App () {
    return(
        <ChakraProvider theme = { theme }>
            <CardComponent />
        </ChakraProvider>
    )
}

export default App;