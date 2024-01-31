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
import { type NavNotification } from "./SectionMenus/NotificationCard/NotificationCardTypes";

export default function NavBar(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
  const notifications: NavNotification[] = [];
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      justifyContent="center"
    >
      <Flex
        flex="1"
        h={16}
        alignItems="center"
        justifyContent="space-between"
        minW=""
        maxW="133vh"
      >
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
            <FriendsMenu friendRequests={[]} />
            <EventMenu />
            <NotificationsMenu notifications={notifications} />
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
          {/* TODO: Replace profileImage with AuthContext for it */}
          <ProfileMenu profileImage="" />
        </HStack>
      </Flex>
    </Flex>
  );
}
