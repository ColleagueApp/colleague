import { SearchIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";

export default function SearchBar(): ReactElement {
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
    <Flex maxW="1000px" minW="300px" w="lg">
      <InputGroup rounded="full" variant="filled">
        <Input
          placeholder="Take me to my next adventure"
          rounded="full"
          bg={useColorModeValue("gray.200", "gray.800")}
        />
        <InputRightAddon rounded="full">
          <SearchIcon color={colleagueColor} />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
}
