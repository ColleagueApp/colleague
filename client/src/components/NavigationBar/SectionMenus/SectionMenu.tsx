import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import React, { type ReactElement, type PropsWithChildren } from "react";
import { type IconType } from "react-icons";

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
}
export default function SectionMenu({
  children,
  name,
  icon,
}: PropsWithChildren<SectionMenuProps>): ReactElement {
  return (
    <Menu>
      <SectionIconButton name={name} icon={icon} />
      <MenuList rounded="2xl">
        <MenuGroup title={name}>{children}</MenuGroup>
      </MenuList>
    </Menu>
  );
}
