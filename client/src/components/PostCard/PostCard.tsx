import {
  AspectRatio,
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import {
  collegeByCode,
  studentStage,
  yearTag,
} from "../../utils/profileHelpers";

function DropMenu(): ReactElement {
  return (
    <Menu>
      <MenuButton>...</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
}

function ProfileBubble(): ReactElement {
  return (
    <Link variant="" href="/">
      <HStack rounded="full" p={1} pr={3}>
        <Avatar height="100%" />
        <VStack alignItems="baseline" spacing={1} ml={1}>
          <HStack>
            <Heading size="md" px={1}>
              Foo Bar
            </Heading>
          </HStack>
          <HStack spacing={1.5}>
            {studentStage(1, true, "2xs")}
            {yearTag(3, true, "2xs")}
            {collegeByCode(2939, "2xs")}
          </HStack>
        </VStack>
      </HStack>
    </Link>
  );
}

function CommentBubble(): ReactElement {
  return (
    <Flex
      backgroundColor="gray.600"
      rounded="2xl"
      mr={3}
      p={2}
      pr={3.5}
      flex={1}
      alignItems="center"
    >
      <Avatar />
      <VStack alignItems="baseline" ml={2} spacing={0}>
        <HStack spacing={2} m={0}>
          <Heading size="sm">Foo Bar</Heading>
          {studentStage(1, true, "2xs")}
          {yearTag(3, true, "2xs")}
          {collegeByCode(2939, "2xs")}
        </HStack>
        <Text fontSize="sm" textAlign="left" noOfLines={2} m={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </VStack>
    </Flex>
  );
}

export default function PostCard(): ReactElement {
  return (
    <Card rounded="2xl">
      <CardHeader pb={2.5}>
        <Flex justifyContent="space-between">
          <ProfileBubble />
          <DropMenu />
        </Flex>
      </CardHeader>
      <CardBody p={0} px={5}>
        <Text textAlign="left" mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <AspectRatio ratio={4 / 3} maxH="45vh">
          <Image rounded="2xl" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        </AspectRatio>
      </CardBody>
      <CardFooter p={5} px={5}>
        <Flex justifyContent="space-between" flex={1}>
          <CommentBubble />
          <HStack>
            <Button colorScheme="purple">Like</Button>
            <Button colorScheme="purple" variant="outline">
              Share
            </Button>
          </HStack>
        </Flex>
      </CardFooter>
    </Card>
  );
}
