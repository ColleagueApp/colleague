import {
  Avatar,
  Heading,
  Text,
  Image,
  Flex,
  HStack,
  Card,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import {
  collegeByCode,
  studentStage,
  yearTag,
} from "../../utils/profileHelpers";

interface ProfileWallProps {
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
}
export default function ProfileWall({
  profile,
}: {
  profile: ProfileWallProps;
}): ReactElement {
  const {
    name,
    profileSource,
    coverSource,
    universityLevel,
    year,
    schoolID,
    followers,
    following,
    city,
    degree,
    interests,
  } = profile;
  return (
    <Card roundedBottom="2xl" flexDirection="column">
      <Image src={coverSource} w="100%" h="350px" objectFit="cover" />
      <Flex>
        <Avatar size="2xl" src={profileSource} m={3} />
        <Flex direction="column" justifyContent="center">
          <Heading textAlign="left">{name}</Heading>
          <HStack>
            {studentStage(universityLevel)}
            {yearTag(year)}
            {collegeByCode(Number(schoolID))}
          </HStack>
          <HStack>
            <Text>{followers}</Text>
            <Text>{following}</Text>
          </HStack>
          <Flex direction="column" textAlign="left">
            <Text>{city}</Text>
            <Text>{degree}</Text>
            <HStack>
              {interests.map((interest) => (
                <Text>{interest}</Text>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
