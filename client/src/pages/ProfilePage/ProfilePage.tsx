import {
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { IoMdPerson, IoMdCalendar } from "react-icons/io";
import { PiSignpostFill } from "react-icons/pi";
import React, { type ReactElement } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProfileWall from "../../components/ProfileWall/ProfileWall";
import PostCard from "../../components/PostCard/PostCard";

const testTrending: Array<{ topic: string; postCount: number; link: string }> =
  [
    { topic: "ASAP", postCount: 84950, link: "./" },
    { topic: "Jamaica", postCount: 9348, link: "./" },
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
const testWall: {
  name: string;
  profileSource: string;
  coverSource: string;
  universityLevel: number;
  year: number;
  schoolID: string;
  friends: number;
  followers: number;
  city: string;
  degree: string;
  interests: string[];
} = {
  name: "Foo Bar",
  profileSource: "https://bit.ly/code-beast",
  coverSource:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  universityLevel: 1,
  year: 3,
  schoolID: "2939",
  friends: 456,
  followers: 555,
  city: "Salt Lake City, UT",
  degree: "Film B.F.A",
  interests: ["Rock Climbing", "Acting"],
};

export default function ProfilePage(): ReactElement {
  return (
    <Flex flex={1} direction="column" justifyContent="center" maxW="125vh">
      <Grid templateColumns="repeat(5, 1fr)" minH="100vh" flex={1}>
        <GridItem colSpan={{ base: 5, md: 4 }} p={2.5}>
          <ProfileWall profile={testWall} />
          <Divider my={4} />
          <Tabs align="center" variant="soft-rounded" rounded="2xl">
            <TabList>
              <Tab>
                <HStack spacing={1}>
                  <Icon as={IoMdPerson} />
                  <Text>Profile</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack spacing={1}>
                  <Icon as={PiSignpostFill} />
                  <Text>Posts</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack spacing={1}>
                  <Icon as={IoMdCalendar} />
                  <Text>Events</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel />
              <TabPanel>
                <Flex direction="column">
                  <PostCard />
                  <Divider my={4} />
                  <PostCard />
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
        <GridItem
          colSpan={1}
          display={{ base: "none", md: "block" }}
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
