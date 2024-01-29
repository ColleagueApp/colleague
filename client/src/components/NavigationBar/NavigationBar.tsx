import React, { type ReactElement } from "react";

import {
  Box,
  Code,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProfileMenu from "./SectionMenus/ProfileMenu";
import SearchBar from "./SearchBar";
import FriendsMenu from "./SectionMenus/FriendsMenu";
import EventMenu from "./SectionMenus/EventMenu";
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
          <Link href="/">
            <Code
              rounded="full"
              bg={useColorModeValue("gray.300", "gray.800")}
              fontSize="2xl"
              fontWeight="bold"
              color={colleagueColor}
            >
              Colleague
            </Code>
          </Link>
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
            <EventMenu />
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
          <ProfileMenu profileImage="https://64.media.tumblr.com/dca16e78cc2be80e750eeff2aff26e5a/3fa5888d0886a893-53/s500x750/1ed940c9f8b3e75e5d4b2d36c94cf4e1ee141870.jpg" />
        </HStack>
      </Flex>
    </Box>
  );
}
