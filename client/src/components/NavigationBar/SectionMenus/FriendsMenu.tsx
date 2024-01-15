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
interface RequestCardProps {
  name: string;
  image: string;
  profileLink: string;
  requestDate: Date;
}
function RequestCard({
  name,
  image = "",
  profileLink,
  requestDate,
}: RequestCardProps): ReactElement {
  return (
    <MenuItem rounded="2xl" closeOnSelect={false} my={1} p={0}>
      <Flex alignItems="center" p={2} maxW="25rem">
        <Link href={profileLink} _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center">
            <Avatar size="md" src={image} />
            <VStack alignItems="left" spacing={0} mx={2}>
              <Text as="b">{name}</Text>
              <HStack spacing={1} fontSize="xs">
                <Icon as={MdOutlinePeople} />
                <Text as="cite" fontSize="xs">
                  Foo2 Bar and others in common
                </Text>
              </HStack>
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

export default function FriendsMenu(): ReactElement {
  return (
    <SectionMenu name="Friend Requests" icon={IoMdPeople}>
      <Flex p={3} direction="column">
        <RequestCard
          name="Foo Bar"
          profileLink="/"
          image=""
          requestDate={new Date("2020-01-12")}
        />
      </Flex>
    </SectionMenu>
  );
}
