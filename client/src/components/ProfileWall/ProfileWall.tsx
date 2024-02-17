import {
  Avatar,
  Heading,
  Text,
  Image,
  Flex,
  HStack,
  Card,
  VStack,
  Icon,
  Button,
  ButtonGroup,
  Tag,
  TagLabel,
  type ThemeTypings,
  useColorModeValue,
  IconButton,
  Stack,
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

// Helper Dummy function
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
  const bgColor: string = useColorModeValue("white", "#2D3748");
  return (
    <Card
      roundedBottom="2xl"
      flexDirection="column"
      flex={1}
      pb={2}
      backgroundColor={bgColor}
    >
      <Image src={coverSource} h="24em" aspectRatio={2} objectFit="cover" />
      <Flex mx={5}>
        <Flex direction="column" flex={1} justifyContent="end" mt="3.5rem">
          <Avatar
            w="10rem"
            h="10rem"
            src={profileSource}
            my={2}
            borderWidth="0.35rem"
            borderColor={bgColor}
            position="absolute"
            top="17rem"
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
                    key={interestID}
                    px={1.5}
                    variant="subtle"
                    rounded="full"
                    fontSize="sm"
                    colorScheme={interestColorScheme}
                  >
                    <TagLabel fontSize="xs">
                      {interestName} {interestEmoji}
                    </TagLabel>
                  </Tag>
                ),
              )}
            </HStack>
            <Stack direction="row">
              <ButtonGroup size="sm" my={2} isAttached>
                <IconButton
                  aria-label="Add friend"
                  px={4}
                  borderWidth={1}
                  icon={<IoMdPersonAdd />}
                />
                <Button aria-label="" variant="outline">
                  {friends} Friends
                </Button>
              </ButtonGroup>
              <ButtonGroup size="sm" my={2} isAttached>
                <IconButton
                  aria-label="Follow?"
                  px={4}
                  borderWidth={1}
                  icon={<Icon as={IoMdPerson} />}
                />
                <Button aria-label="" variant="outline">
                  {followers} Followers
                </Button>
              </ButtonGroup>
            </Stack>
          </VStack>
        </Flex>
      </Flex>
    </Card>
  );
}
