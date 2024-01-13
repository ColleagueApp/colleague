import React, { type ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";
import SectionMenu from "./SectionMenu";

export default function FriendsMenu(): ReactElement {
  return (
    <SectionMenu name="Friends" icon={IoMdPeople}>
      <Flex p={3}>TODO: Implement Friend Requests</Flex>
    </SectionMenu>
  );
}
