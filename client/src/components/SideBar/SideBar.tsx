import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  type FlexProps,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React, {
  type ReactNode,
  type PropsWithChildren,
  type ReactElement,
} from "react";

// Dialogue Box template
interface DialogueBoxProps {
  title: string;
  direction?: FlexProps["direction"];
  alignItems?: FlexProps["alignItems"];
  justifyContent?: FlexProps["justifyContent"];
}
function DialogueBox({
  title,
  direction,
  alignItems,
  justifyContent,
  children,
}: PropsWithChildren<DialogueBoxProps>): ReactElement {
  return (
    <Card my={3} p={1} rounded="xl">
      <CardHeader px={2} py={2}>
        <Heading fontSize="md" textAlign="left">
          {title}
        </Heading>
      </CardHeader>
      <CardBody px={3} py={1}>
        <Flex
          direction={direction}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          {children}
        </Flex>
      </CardBody>
    </Card>
  );
}
DialogueBox.defaultProps = {
  direction: "row",
  alignItems: "center",
  justifyContent: "center",
};

// TrendingBox
interface HashFormat {
  topic: string;
  postCount: number;
  link: string;
}
function TrendingBox({
  trendingHash,
}: {
  trendingHash: HashFormat[];
}): ReactElement {
  const topicTags: ReactNode[] = trendingHash.map(
    ({ topic, postCount, link }): ReactNode => (
      <Link href={link} textAlign="left" pb={2}>
        <Heading fontSize="xs">#{topic}</Heading>
        <Text fontSize="xs">{postCount} posts in the last hour </Text>
      </Link>
    ),
  );
  return (
    <DialogueBox
      title="Trending near you"
      direction="column"
      alignItems="flex-start"
    >
      {topicTags}
    </DialogueBox>
  );
}

// Updates Box
interface UpdatesFormat {
  userName: string;
  name: string;
  profilePic: string;
  profileID: string;
}
function UpdatesBox({
  updateList,
}: {
  updateList: UpdatesFormat[];
}): ReactElement {
  const friendStatus: ReactNode[] = updateList.map(
    ({ userName, name, profilePic, profileID }): ReactNode => (
      <Link href={`./${profileID}`}>
        <Avatar name={name} src={profilePic} />
        <Text fontSize="xs">{userName}</Text>
      </Link>
    ),
  );

  return <DialogueBox title="Updates">{friendStatus}</DialogueBox>;
}
interface SideBarProps {
  trendingHash: HashFormat[];
  updateList: UpdatesFormat[];
}
export default function SideBar({
  trendingHash,
  updateList,
}: SideBarProps): ReactElement {
  return (
    <Flex direction="column" position="sticky" maxH="100vh" top="4.6rem">
      <UpdatesBox updateList={updateList} />
      <TrendingBox trendingHash={trendingHash} />
    </Flex>
  );
}
