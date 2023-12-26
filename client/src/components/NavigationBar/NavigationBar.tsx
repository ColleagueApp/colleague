import React, { type ReactElement } from "react";

import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Code,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { IoMdPeople } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { type IconType } from "react-icons";

interface ProfileMenuProps {
  profileImage: string;
}
function ProfileMenu({ profileImage }: ProfileMenuProps): ReactElement {
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="full"
        variant="link"
        cursor="pointer"
        minW={0}
      >
        <Avatar
          outline="20px"
          outlineColor={colleagueColor}
          size="sm"
          src={profileImage}
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Link 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

function SearchBar(): ReactElement {
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
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
  );
}

interface NavItemProps {
  name: string;
  icon: IconType;
}
function NavItem({ name, icon }: NavItemProps): ReactElement {
  return (
    <IconButton
      rounded="full"
      bg="None"
      aria-label={name}
      icon={<Icon as={icon} />}
    />
  );
}

interface NavItemsListProps {
  items: NavItemProps[];
}
function NavItemList({ items }: NavItemsListProps): ReactElement {
  return (
    <HStack
      spacing={0}
      rounded="full"
      bg={useColorModeValue("colleaguePurple.300", "colleaguePurple.700")}
    >
      {items.map(
        (item, index): ReactElement => (
          // eslint-disable-next-line react/no-array-index-key
          <NavItem key={index} name={item.name} icon={item.icon} />
        ),
      )}
    </HStack>
  );
}

// For testing
const NavIcons: Array<{ name: string; icon: IconType }> = [
  { name: "People", icon: IoMdPeople },
  { name: "Notifications", icon: FaRegBell },
  { name: "Organization Notifications", icon: GoOrganization },
];

export default function NavBar(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Code
            rounded="full"
            bg={useColorModeValue("gray.300", "gray.800")}
            fontSize="2xl"
            fontWeight="bold"
            color={colleagueColor}
          >
            Colleague
          </Code>
        </Box>
        <Flex maxW="1000px" minW="300px" w="md">
          <SearchBar />
        </Flex>
        <HStack
          rounded="full"
          bg={useColorModeValue("gray.200", "gray.800")}
          spacing={2}
        >
          <NavItemList items={NavIcons} />
          <IconButton
            variant="ghost"
            aria-label="Change Mode"
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <MoonIcon color={colleagueColor} />
              ) : (
                <SunIcon color={colleagueColor} />
              )
            }
          />
          <ProfileMenu profileImage="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80fReactElement9636ba24f7a4a9" />
        </HStack>
      </Flex>
    </Box>
  );
}
