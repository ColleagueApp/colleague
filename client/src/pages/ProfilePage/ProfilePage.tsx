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

export default function ProfilePage(): ReactElement {
  return (
    <Flex flex={1} direction="column" justifyContent="center" maxW="133vh">
      <Grid templateColumns="repeat(5, 1fr)" minH="100vh" flex={1}>
        <GridItem colSpan={{ base: 5, lg: 4 }} p={2.5}>
          <ProfileWall />
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
