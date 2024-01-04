import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProfileWall from "../../components/ProfileWall/ProfileWall";

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
  followers: number;
  following: number;
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
  followers: 456,
  following: 555,
  city: "Salt Lake City, UT",
  degree: "Film B.F.A",
  interests: ["Rock Climbing", "Acting"],
};

export default function ProfilePage(): ReactElement {
  return (
    <Flex flex={1} direction="column" justifyContent="center" maxW="177vh">
      <Grid templateColumns="repeat(5, 1fr)" minH="100vh" flex={1}>
        <GridItem colSpan={{ base: 5, md: 4 }} p={2.5}>
          <ProfileWall profile={testWall} />
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
