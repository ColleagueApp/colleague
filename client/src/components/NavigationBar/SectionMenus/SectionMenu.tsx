import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  Tooltip,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, {
  type ReactElement,
  type PropsWithChildren,
  Children,
} from "react";
import { type IconType } from "react-icons";
import { FaGhost } from "react-icons/fa";

interface NavItemProps {
  name: string;
  icon: IconType;
}
function SectionIconButton({ name, icon }: NavItemProps): ReactElement {
  return (
    <Tooltip label={name} aria-label={name} openDelay={500}>
      <MenuButton
        as={IconButton}
        fontSize="1.125rem"
        rounded="full"
        bg="None"
        aria-label={name}
        icon={<Icon as={icon} />}
      />
    </Tooltip>
  );
}

interface SectionMenuProps {
  name: string;
  icon: IconType;
  ghostIcon?: IconType;
  ghostMessage: string;
}
export default function SectionMenu({
  children,
  name,
  icon,
  ghostIcon,
  ghostMessage,
}: PropsWithChildren<SectionMenuProps>): ReactElement {
  return (
    <Menu>
      <SectionIconButton name={name} icon={icon} />
      <MenuList rounded="2xl">
        <MenuGroup title={name}>
          <Flex
            px={3}
            direction="column"
            scrollBehavior="smooth"
            overflowY="auto"
            maxH="75vh"
          >
            {Children.count(children) > 0 ? (
              children
            ) : (
              <VStack color="gray" justifyContent="center" m={4}>
                <Icon as={ghostIcon ?? FaGhost} fontSize="3xl" />
                <Text as="cite" fontSize="sm">
                  {ghostMessage}
                </Text>
              </VStack>
            )}
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
SectionMenu.defaultProps = {
  ghostIcon: FaGhost,
};
