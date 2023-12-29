/* eslint-disable react/jsx-filename-extension */
/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <DefaultLayout>
          <ProfilePage />
          {/* <Box alignItems="center" justifyContent="center" flex={1}>
            <Text fontSize="3xl">
              [Insert future
              <Code
                bg="gray.900"
                fontSize=""
                fontWeight="bold"
                color="rgb(154, 87, 205)"
              >
                {" "}
                Colleague{" "}
              </Code>
              app here]
            </Text>
          </Box> */}
        </DefaultLayout>
      </div>
    </ChakraProvider>
  );
}

export default App;
