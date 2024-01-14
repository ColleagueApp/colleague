import React, { type ReactElement } from "react";
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosAdd, IoMdPeople, IoMdClose } from "react-icons/io";
import SectionMenu from "./SectionMenu";

// TODO:
// - Show time in days or hours, whichever is greater, that request has been sent.
// - Filter between several categories (Same school, different school, etc.)
// - Format accept reject buttons using colleague colors instead of green/red.
interface RequestCardProps {
  name: string;
  image: string;
  requestDate: Date;
}
function RequestCard({
  name,
  image = "",
  requestDate,
}: RequestCardProps): ReactElement {
  return (
    <MenuItem rounded="full" closeOnSelect={false} my={1} p={2}>
      <Flex>
        <Avatar size="md" src={image} />
        <VStack alignItems="left" spacing={0} mx={2}>
          <Text as="b">{name}</Text>
          <Text fontSize="sm">{requestDate.toDateString()}</Text>
        </VStack>
        <HStack rounded="full">
          <IconButton
            fontSize="1.25em"
            aria-label="Accept"
            colorScheme="green"
            isRound
            icon={<Icon as={IoIosAdd} />}
          />
          <IconButton
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
          image=""
          requestDate={new Date("2020-01-12")}
        />
      </Flex>
    </SectionMenu>
  );
}
