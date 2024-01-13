import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
} from "@chakra-ui/react";
import React, { type ReactElement, type PropsWithChildren } from "react";
import { type IconType } from "react-icons";

interface NavItemProps {
  name: string;
  icon: IconType;
}
function SectionIconButton({ name, icon }: NavItemProps): ReactElement {
  return (
    <MenuButton
      as={IconButton}
      rounded="full"
      bg="None"
      aria-label={name}
      icon={<Icon as={icon} />}
    />
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
      <MenuList>
        <MenuGroup title={name}>{children}</MenuGroup>
      </MenuList>
    </Menu>
  );
}
