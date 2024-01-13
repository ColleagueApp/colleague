import React, { type ReactElement } from "react";
import { GoOrganization } from "react-icons/go";
import { Flex } from "@chakra-ui/react";
import SectionMenu from "./SectionMenu";

export default function OrganizationMenu(): ReactElement {
  return (
    <SectionMenu name="Organization" icon={GoOrganization}>
      <Flex p={3}>TODO: Organization Notifications</Flex>
    </SectionMenu>
  );
}
