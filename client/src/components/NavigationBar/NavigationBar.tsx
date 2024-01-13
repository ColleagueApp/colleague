import React, { type ReactElement } from "react";

import {
  Box,
  Code,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import FriendsMenu from "./SectionMenus/FriendsMenu";
import OrganizationMenu from "./SectionMenus/OrganizationMenu";
import NotificationsMenu from "./SectionMenus/NotificationsMenu";

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
          {/* TODO: Replace Code Snippet with Logo */}
        </Box>
        <SearchBar />
        <HStack
          rounded="full"
          bg={useColorModeValue("gray.200", "gray.800")}
          spacing={2}
        >
          <HStack
            spacing={0}
            rounded="full"
            bg={useColorModeValue("colleaguePurple.300", "colleaguePurple.700")}
          >
            <FriendsMenu />
            <OrganizationMenu />
            <NotificationsMenu />
          </HStack>
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
