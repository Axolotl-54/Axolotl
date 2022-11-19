import React, {Component} from "react";
import CardComponent from '/client/components/cardComponent.js';
import CardContainer from '/client/components/cardContainer.js';
import ColumnContainer from '/client/components/columnContainer.js'
import  { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import '../styles/styles.scss';
import NavBar from '/client/components/navBar.js';
import { Box, Flex } from '@chakra-ui/react'

//theme variable like CSS, but for the chakra components
const theme = extendTheme({
    

})


function App () {
    return(
        <ChakraProvider theme = { theme }>
            <Flex
            flexDirection='column'>
                <NavBar />
                <ColumnContainer />
            </Flex>
            {/* <CardContainer /> */}
        </ChakraProvider>
    )
}

export default App;