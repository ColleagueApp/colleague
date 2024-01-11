import {
  Avatar,
  Heading,
  Text,
  Image,
  Flex,
  HStack,
  Card,
  VStack,
  AspectRatio,
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
    <Card roundedBottom="2xl" flexDirection="column" flex={1}>
      <AspectRatio ratio={2} maxH="40vh">
        <Image src={coverSource} h="350px" objectFit="cover" />
      </AspectRatio>
      <Flex>
        <VStack m={3}>
          <Avatar size="2xl" src={profileSource} m={1} />
          <HStack>
            <Text>{followers}</Text>
            <Text>{following}</Text>
          </HStack>
        </VStack>

        <Flex direction="column" justifyContent="center" mb={2}>
          <Heading textAlign="left">{name}</Heading>
          <HStack my={2} spacing={1}>
            {studentStage(universityLevel)}
            {yearTag(year)}
            {collegeByCode(Number(schoolID))}
          </HStack>

          <VStack alignItems="left" textAlign="left" spacing={0}>
            <Text as="b" fontSize="sm">
              {degree}
            </Text>
            <Text fontSize="sm">{city}</Text>
            <HStack>
              {interests.map((interest) => (
                <Text fontSize="sm">{interest}</Text>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Card>
  );
}
