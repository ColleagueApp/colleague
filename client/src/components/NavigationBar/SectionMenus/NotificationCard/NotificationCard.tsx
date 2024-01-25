import React, { type ReactElement } from "react";
import {
  MenuItem,
  Flex,
  Link,
  Avatar,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { GoClock } from "react-icons/go";
import {
  type PostContent,
  isSharePostContent,
  isLikePostContent,
  isCommentPostContent,
  isCommentReplyPostContent,
  isPostContent,
  type NavNotification,
} from "./NotificationCardTypes";

// postMessage
interface PostMessageProps {
  userName: string;
  content: PostContent;
}
function PostMessage({ userName, content }: PostMessageProps): ReactElement {
  // If Share post
  let action: string = "";
  let message: string = "";
  if (isSharePostContent(content)) {
    action = " shared your post: ";
    message =
      content.newPostText === ""
        ? `"${content.newPostText}"`
        : `"${content.postText}"`;
  }
  // If like post
  else if (isLikePostContent(content)) {
    action = " liked your post: ";
    message = `"${content.postText}"`;
  }
  // If reply comment
  else if (isCommentReplyPostContent(content)) {
    action = " replied to your comment: ";
    message = `"${content.newComment}"`;
  }
  // If comment
  else if (isCommentPostContent(content)) {
    action = " commented your post: ";
    message = `"${content.comment}"`;
  }
  return (
    <Text fontSize="sm" noOfLines={2}>
      <Text as="b">{userName}</Text>
      {action}
      <Text as="cite" noOfLines={1}>
        {message}
      </Text>
    </Text>
  );
}

// Birthday Message
interface BirthdayMessageProps {
  userName: string;
}
function BirthdayMessage({ userName }: BirthdayMessageProps): ReactElement {
  return (
    <Text fontSize="sm" noOfLines={2}>
      Today is <Text as="b">{userName}</Text>&apos;s Birthday!
      <Text as="cite" noOfLines={1}>
        Send your well wishes!
      </Text>
    </Text>
  );
}

export default function NotificationCard({
  notificationID,
  userName,
  userID,
  userAvatar,
  content,
}: NavNotification): ReactElement {
  return (
    <MenuItem rounded="2xl" p={0} key={notificationID}>
      <Flex alignItems="center" p={2} maxW="25rem">
        <Link href={`/${userID}`} _hover={{ textDecoration: "none" }}>
          <Flex flex={1} alignItems="center">
            <Avatar src={userAvatar} />
            <Flex direction="column" alignItems="left" mx={2}>
              {isPostContent(content) ? (
                <PostMessage content={content} userName={userName} />
              ) : (
                <BirthdayMessage userName={userName} />
              )}
              <HStack spacing={1} fontSize="2xs" alignItems="center">
                <Icon as={GoClock} />
                <Text as="cite">{content.time.toDateString()}</Text>
              </HStack>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </MenuItem>
  );
}
