import React, { type ReactElement } from "react";
import { FaRegBell } from "react-icons/fa6";
import { Flex } from "@chakra-ui/react";
import SectionMenu from "./SectionMenu";

export default function NotificationsMenu(): ReactElement {
  return (
    <SectionMenu name="Notifications" icon={FaRegBell}>
      <Flex p={3}>TODO: Implement Notifications</Flex>
    </SectionMenu>
  );
}
