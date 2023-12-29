import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import SideBar from "../../components/SideBar/SideBar";

const testTrending: Array<{ topic: string; postCount: number; link: string }> =
  [
    { topic: "ASAP", postCount: 84950, link: "./" },
    { topic: "JamaicaGhetto", postCount: 9348, link: "./" },
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
    <Flex flex={1} direction="column" justifyContent="center" maxW="177vh">
      <Grid templateColumns="repeat(5, 1fr)" minH="100vh" flex={1}>
        <GridItem colSpan={4} bg="purple.100" />
        <GridItem
          colSpan={1}
          minW="300px"
          textAlign="center"
          alignContent="center"
        >
          <SideBar trendingHash={testTrending} updateList={testUpdates} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
