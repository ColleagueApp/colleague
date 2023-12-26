/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
import React from "react";
import "./App.css";
import {
  ChakraProvider,
  Text,
  Code,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavigationBar/NavigationBar";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Text>
            [Insert future
            <Code
              bg={useColorModeValue("gray.300", "gray.900")}
              fontSize=""
              fontWeight="bold"
              color="rgb(154, 87, 205)"
            >
              {" "}
              Colleague{" "}
            </Code>
            app here]
          </Text>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
