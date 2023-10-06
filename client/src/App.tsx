/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App () {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <h1>[Insert future <code>Colleague</code> app here]</h1>
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
