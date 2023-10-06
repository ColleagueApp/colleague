/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
import React from 'react'
import './App.css'
import { ChakraProvider, Text, Code } from '@chakra-ui/react'

function App () {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Text>
            [Insert future
            <Code bg={'gray.900'} fontSize='' fontWeight='bold' color='rgb(154, 87, 205)'> Colleague </Code>
            app here]
          </Text>
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
