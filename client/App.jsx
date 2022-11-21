import React, {Component} from "react";
import ColumnContainer from './/components/columnContainer.jsx'
import  { extendTheme, ChakraProvider } from '@chakra-ui/react';
import NavBar from './/components/navBar.jsx';
import { Box, Flex , Card} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTasks } from './actions/actions'

//theme variable like CSS, but for the chakra components
const theme = extendTheme({
    fonts: {
        body: '"Poor Story", cursive',
    }

})



function App () {
    const dispatch = useDispatch();
    
    return(
        <React.StrictMode>
            <ChakraProvider theme = { theme }>
                <Flex
                flexDirection='column' 
                align='center'
                >
                    <Card 
                        variant = "elevated"
                        w='100%'
                    >
                        <NavBar />
                    </Card>
                    <ColumnContainer />
                </Flex>
                {/* <CardContainer /> */}
            </ChakraProvider>
        </React.StrictMode>
    )
}

export default App;