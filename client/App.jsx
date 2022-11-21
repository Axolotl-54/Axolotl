import React, {Component} from "react";
import ColumnContainer from './/components/columnContainer.jsx'
import  { extendTheme, ChakraProvider } from '@chakra-ui/react';
import NavBar from './/components/navBar.jsx';
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