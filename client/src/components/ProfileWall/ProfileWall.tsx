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
  Tag,
  TagLabel,
  type ThemeTypings,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import { IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import {
  collegeByCode,
  studentStage,
  yearTag,
} from "../../utils/profileHelpers";

interface Interests {
  interestEmoji: string;
  interestID: string;
  interestName: string;
  interestColorScheme: ThemeTypings["colorSchemes"];
}
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
  interests: Interests[];
}

// Helper
function getProfilebyID(): ProfileWallProps {
  return {
    name: "Foo Bar",
    profileSource: "https://bit.ly/code-beast",
    coverSource:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    universityLevel: 1,
    year: 3,
    schoolID: "2939",
    friends: 456,
    followers: 555,
    city: "New York City Metropolitan Area",
    degree: "Film B.F.A",
    interests: [
      {
        interestEmoji: "🧗",
        interestColorScheme: "yellow",
        interestID: "109202",
        interestName: "Rock Climbing",
      },
      // { emojiID: "1020", interestName: "Acting" },
    ],
  };
}
export default function ProfileWall(): ReactElement {
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
  } = getProfilebyID();
  return (
    <Card roundedBottom="2xl" flexDirection="column" flex={1} pb={2}>
      <AspectRatio ratio={2} maxH="40vh">
        <Image src={coverSource} h="350px" objectFit="cover" />
      </AspectRatio>
      <Flex mx={5}>
        <Flex direction="column" flex={1} justifyContent="end" mt="3.5rem">
          <Avatar
            w="10rem"
            h="10rem"
            src={profileSource}
            my={2}
            border={`0.35rem solid ${useColorModeValue("white", "#2D3748")}`}
            position="absolute"
            bottom="12rem"
          />
          <Heading textAlign="left" noOfLines={1} size="xl" mb={1}>
            {name}
          </Heading>
          <HStack mb={2} spacing={1}>
            {studentStage(universityLevel)}
            {yearTag(year)}
            {collegeByCode(Number(schoolID))}
          </HStack>
          <VStack alignItems="left" textAlign="left" spacing={0}>
            <Text as="b" fontSize="sm">
              {degree}
            </Text>
            <Text fontSize="sm">{city}</Text>
            <HStack fontSize="sm">
              <Text as="b">Talks about:</Text>
              {interests.map(
                ({
                  interestColorScheme,
                  interestEmoji,
                  interestID,
                  interestName,
                }) => (
                  <Tag
                    px={1.5}
                    variant="subtle"
                    rounded="full"
                    fontSize="sm"
                    colorScheme={interestColorScheme}
                    id={interestID}
                  >
                    <TagLabel fontSize="xs">
                      {interestName} {interestEmoji}
                    </TagLabel>
                  </Tag>
                ),
              )}
            </HStack>
            <ButtonGroup rounded="full" size="sm" isAttached my={2}>
              <Button
                rounded="full"
                leftIcon={<Icon as={IoMdPersonAdd} />}
                aria-label=""
              >
                {friends} Friends
              </Button>
              <Button
                rounded="full"
                rightIcon={<Icon as={IoMdPerson} />}
                aria-label=""
              >
                {followers} Followers
              </Button>
            </ButtonGroup>
          </VStack>
        </Flex>
      </Flex>
    </Card>
  );
}
