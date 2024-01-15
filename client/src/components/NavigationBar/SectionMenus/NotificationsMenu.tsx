import React, { type ReactElement } from "react";
import { FaRegBell } from "react-icons/fa6";
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { GoClock } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import SectionMenu from "./SectionMenu";

interface NotificationCardRequiredProps {
  userName: string;
  actionLink: string;
  imageSrc: string;
  time: Date;
}

interface NotificationCardDefaultProps {
  notificationType?: number;
  subText?: string;
}
interface NotificationCardProps
  extends NotificationCardRequiredProps,
    NotificationCardDefaultProps {}

const defaultProps: NotificationCardDefaultProps = {
  notificationType: 0,
  subText: "",
};
function NotificationCard({
  notificationType,
  userName,
  actionLink,
  imageSrc,
  subText,
  time,
}: NotificationCardProps): ReactElement {
  return (
    <MenuItem rounded="2xl" p={0}>
      <Flex alignItems="center" p={2} maxW="25rem">
        <Link href={actionLink} _hover={{ textDecoration: "none" }}>
          <Flex>
            <Avatar src={imageSrc} />
            <Flex direction="column" alignItems="left" mx={2}>
              <Text
                as="b"
                mb={0}
              >{`${userName} did something type: ${notificationType}`}</Text>
              <Text as="cite" fontSize="sm" noOfLines={2} lineHeight={5} mb={1}>
                {subText}
              </Text>
              <HStack spacing={1} fontSize="2xs" alignItems="center">
                <Icon as={GoClock} />
                <Text as="cite">{time.toDateString()}</Text>
              </HStack>
            </Flex>
          </Flex>
        </Link>
        <IconButton
          variant="ghost"
          fontSize="1.25em"
          aria-label="Decline"
          isRound
          icon={<Icon as={IoMdClose} />}
        />
      </Flex>
    </MenuItem>
  );
}
NotificationCard.defaultProps = defaultProps;

export default function NotificationsMenu(): ReactElement {
  return (
    <SectionMenu name="Notifications" icon={FaRegBell}>
      <Flex p={3}>
        <NotificationCard
          userName="Foo Bar 2"
          actionLink="/"
          imageSrc=""
          time={new Date()}
        />
      </Flex>
    </SectionMenu>
  );
}
