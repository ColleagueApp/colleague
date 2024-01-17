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
  Icon,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import { IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import {
  collegeByCode,
  studentStage,
  yearTag,
} from "../../utils/profileHelpers";

// TODO: Make this part look more organized
interface ProfileWallProps {
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
    friends,
    followers,
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
          <ButtonGroup rounded="full" size="sm" isAttached>
            <Button
              rounded="full"
              leftIcon={<Icon as={IoMdPersonAdd} />}
              aria-label=""
            >
              {friends}
            </Button>
            <Button
              rounded="full"
              rightIcon={<Icon as={IoMdPerson} />}
              aria-label=""
            >
              {followers}
            </Button>
          </ButtonGroup>
        </VStack>

        <Flex direction="column" justifyContent="center" mb={2}>
          <Heading textAlign="left" noOfLines={1}>
            {name}
          </Heading>
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
