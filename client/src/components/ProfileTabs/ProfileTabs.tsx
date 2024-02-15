import {
  HStack,
  Tab,
  Icon,
  TabPanel,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, {
  type PropsWithChildren,
  type ReactElement,
  Children,
} from "react";
import { type IconType } from "react-icons";
import { FaGhost } from "react-icons/fa";

interface ProfileTabProps {
  title: string;
  icon: IconType;
}
export function ProfileTab({ title, icon }: ProfileTabProps): ReactElement {
  return (
    <Tab>
      <HStack spacing={1}>
        <Icon as={icon} />
        <Text>{title}</Text>
      </HStack>
    </Tab>
  );
}

interface ProfilePanelProps {
  ghostIcon?: IconType;
  ghostMessage?: string;
}
export function ProfilePanel({
  children,
  ghostIcon,
  ghostMessage,
}: PropsWithChildren<ProfilePanelProps>): ReactElement {
  const color = useColorModeValue("gray.400", "gray.600");
  return (
    <TabPanel px={0}>
      {Children.count(children) > 0 ? (
        children
      ) : (
        <VStack color={color} justifyContent="center" m={7}>
          <Icon as={ghostIcon} fontSize="3xl" />
          <Text as="cite" fontSize="sm">
            {ghostMessage}
          </Text>
        </VStack>
      )}
    </TabPanel>
  );
}
ProfilePanel.defaultProps = {
  ghostIcon: FaGhost,
  ghostMessage: "Nothing to see here...",
};
