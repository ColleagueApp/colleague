/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
import React from "react";
import "./App.css";
import { ChakraProvider, Text, Code } from "@chakra-ui/react";
import theme from "./theme";
import { AuthProvider } from "./store/AuthContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Text>
              [Insert future
              <Code fontSize="" fontWeight="bold" color="rgb(154, 87, 205)">
                {" "}
                Colleague{" "}
              </Code>
              app here]
            </Text>
          </header>
        </div>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
