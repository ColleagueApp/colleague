import {
  Divider,
  Flex,
  Grid,
  GridItem,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProfileWall from "../../components/ProfileWall/ProfileWall";
import {
  PostsPanel,
  PostsTab,
} from "../../components/ProfileTabs/PostsTab/PostsTab";
import {
  CanvasPanel,
  CanvasTab,
} from "../../components/ProfileTabs/CanvasTab/CanvasTab";
import {
  EventsPanel,
  EventsTab,
} from "../../components/ProfileTabs/EventsTab/EventsTab";

const testTrending: Array<{
  topic: string;
  hashID: string;
  postCount: number;
  link: string;
}> = [
  { hashID: "2394", topic: "ASAP", postCount: 84950, link: "./" },
  { hashID: "2984", topic: "Jamaica", postCount: 9348, link: "./" },
];
const testUpdates: Array<{
  userName: string;
  name: string;
  profilePic: string;
  profileID: string;
}> = [
  {
    userName: "foo1",
    name: "Foo Ferrigno",
    profilePic: "https://bit.ly/dan-abramov",
    profileID: "233323",
  },
];

export default function ProfilePage(): ReactElement {
  return (
    <Flex flex={1} direction="column" justifyContent="center" maxW="6xl">
      <Grid templateColumns="repeat(5, 1fr)" minH="100vh" flex={1}>
        <GridItem colSpan={{ base: 5, lg: 4 }} p={2.5}>
          <ProfileWall />
          <Divider my={4} />
          <Tabs
            align="center"
            variant="soft-rounded"
            rounded="2xl"
            colorScheme="colleaguePurple"
          >
            <TabList>
              <CanvasTab />
              <PostsTab />
              <EventsTab />
            </TabList>
            <TabPanels>
              <CanvasPanel />
              <PostsPanel />
              <EventsPanel />
            </TabPanels>
          </Tabs>
        </GridItem>
        <GridItem
          colSpan={1}
          display={{ base: "none", lg: "block" }}
          minW="300px"
          textAlign="center"
          alignContent="center"
          p={2.5}
        >
          <SideBar trendingHash={testTrending} updateList={testUpdates} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
