import React, { type ReactElement } from "react";
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosAdd, IoMdPeople, IoMdClose } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import SectionMenu from "./SectionMenu";

// TODO:
// - Show time in days or hours, whichever is greater, that request has been sent.
// - Filter between several categories (Same school, different school, etc.)
// - Format accept reject buttons using colleague colors instead of green/red.
interface Friend {
  firstName: string;
  lastName: string;
  profileLink: string;
  profileID: string;
}
function CommonMessage({ friends }: { friends: Friend[] }): ReactElement {
  let message: string = "No friends in common.";
  if (friends.length > 0) {
    const topFriend: Friend = friends[0];
    message = `${topFriend.firstName} ${topFriend.lastName}${
      friends.length === 1
        ? " is a friend in common."
        : ` and ${friends.length - 1} ${
            friends.length - 2 === 0 ? "friend" : "friends"
          } in common.`
    }`;
  }
  return (
    <HStack spacing={1} fontSize="xs">
      <Icon as={MdOutlinePeople} />
      <Text as="cite" fontSize="xs">
        {message}
      </Text>
    </HStack>
  );
}

interface RequestCardProps {
  profileID: string;
  firstName: string;
  lastName: string;
  image: string;
  profileLink: string;
  requestDate: Date;
  friends: Friend[];
}
function RequestCard({
  profileID,
  firstName,
  lastName,
  image = "",
  profileLink,
  requestDate,
  friends,
}: RequestCardProps): ReactElement {
  return (
    <MenuItem rounded="2xl" closeOnSelect={false} my={1} p={0} key={profileID}>
      <Flex alignItems="center" p={2} maxW="25rem">
        <Link href={profileLink} _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center">
            <Avatar size="md" src={image} />
            <VStack alignItems="left" spacing={0} mx={2}>
              <Text as="b">
                {firstName} {lastName}
              </Text>
              <CommonMessage friends={friends} />
              <HStack spacing={1} fontSize="2xs">
                <Icon as={FaRegClock} />
                <Text as="cite">{requestDate.toDateString()}</Text>
              </HStack>
            </VStack>
          </Flex>
        </Link>
        <HStack rounded="full">
          <IconButton
            variant="ghost"
            fontSize="1.25em"
            aria-label="Accept"
            colorScheme="green"
            isRound
            icon={<Icon as={IoIosAdd} />}
          />
          <IconButton
            variant="ghost"
            fontSize="1.25em"
            aria-label="Decline"
            colorScheme="red"
            isRound
            icon={<Icon as={IoMdClose} />}
          />
        </HStack>
      </Flex>
    </MenuItem>
  );
}

export default function FriendsMenu({
  friendRequests,
}: {
  friendRequests: RequestCardProps[];
}): ReactElement {
  return (
    <SectionMenu
      name="Friend Requests"
      icon={IoMdPeople}
      ghostMessage="No new friend requests"
    >
      {friendRequests.map(
        ({
          firstName,
          lastName,
          image,
          friends,
          profileLink,
          requestDate,
          profileID,
        }) => (
          <RequestCard
            firstName={firstName}
            lastName={lastName}
            image={image}
            friends={friends}
            profileLink={profileLink}
            requestDate={requestDate}
            profileID={profileID}
          />
        ),
      )}
    </SectionMenu>
  );
}
