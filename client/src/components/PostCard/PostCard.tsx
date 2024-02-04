import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import {
  IoMdHeartEmpty,
  IoMdHeart,
  IoMdRepeat,
  IoMdShareAlt,
} from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import {
  collegeByCode,
  studentStage,
  yearTag,
} from "../../utils/profileHelpers";

function DropMenu(): ReactElement {
  return (
    <Menu>
      <MenuButton>
        <Icon as={BsThreeDots} />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
}

const profileInfo = (
  ID: string,
): {
  name: string;
  lastName: string;
  profileSrc: string;
  studentStageID: number;
  collegeCode: number;
  yearCode: number;
} => {
  if (ID.length > 0) {
    return {
      name: "Foo",
      lastName: "Bar",
      profileSrc:
        "https://lh4.googleusercontent.com/proxy/3lnp1cCF96CUx1EC7X215wIBTf6rhQ28WK68leMsSbLIKvAu89bdz-Q0pS5n6EY007uWL-Uc3JNJ-ssyqT56-3GAQ2UYl90FLBypeGLdmukWHNRAZFXcAA07kEaH8lJhRQ",
      studentStageID: 1,
      collegeCode: 2939,
      yearCode: 3,
    };
  }
  return {
    name: "Foo",
    lastName: "Bar",
    profileSrc:
      "https://lh4.googleusercontent.com/proxy/3lnp1cCF96CUx1EC7X215wIBTf6rhQ28WK68leMsSbLIKvAu89bdz-Q0pS5n6EY007uWL-Uc3JNJ-ssyqT56-3GAQ2UYl90FLBypeGLdmukWHNRAZFXcAA07kEaH8lJhRQ",
    studentStageID: 1,
    collegeCode: 2939,
    yearCode: 3,
  };
};

function ProfileBubble({ profileID }: { profileID: string }): ReactElement {
  // TODO: Use backend to retreive profiles
  const { name, lastName, profileSrc, studentStageID, collegeCode, yearCode } =
    profileInfo(profileID);
  return (
    <HStack rounded="full" p={1} pr={3}>
      <Avatar height="100%" src={profileSrc} />
      <VStack alignItems="baseline" spacing={1} ml={1}>
        <Link variant="" href="/" _hover={{ textDecoration: "none" }}>
          <Heading size="md" px={1}>
            {`${name} ${lastName}`}
          </Heading>
        </Link>
        <HStack spacing={1.5}>
          {studentStage(studentStageID, true, "2xs")}
          {yearTag(yearCode, true, "2xs")}
          {collegeByCode(collegeCode, "2xs")}
        </HStack>
      </VStack>
    </HStack>
  );
}

interface CommentProps {
  profileID: string;
  commentID: string;
  commentContent: string;
  commentLikes: number;
}
function CommentBubble({
  commentContent,
  commentID,
  commentLikes,
  profileID,
}: CommentProps): ReactElement {
  const { name, lastName, profileSrc, studentStageID, collegeCode, yearCode } =
    profileInfo(profileID);
  return (
    <Flex
      backgroundColor={useColorModeValue("gray.200", "gray.600")}
      rounded="2xl"
      mt={2}
      p={2}
      pr={3.5}
      flex={1}
      alignItems="center"
      key={`comment-${commentID}`}
    >
      <Avatar src={profileSrc} />
      <VStack alignItems="baseline" ml={2} spacing={0}>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <HStack spacing={2} m={0}>
            <Heading size="sm">{`${name} ${lastName}`}</Heading>
            {studentStage(studentStageID, true, "2xs")}
            {yearTag(yearCode, true, "2xs")}
            {collegeByCode(collegeCode, "2xs")}
          </HStack>
        </Link>
        <Text fontSize="sm" textAlign="left" noOfLines={2} m={0}>
          {commentContent}
        </Text>
        {commentLikes}
      </VStack>
    </Flex>
  );
}

interface PostCardProps {
  postID: string;
  profileID: string;
  postBody: string;
  postMediaType?: "image" | undefined;
  postMediaSrc?: string;
  postLikeCount: number;
  postIsLiked?: boolean;
  postTopComment?: CommentProps | undefined;
}
export default function PostCard({
  postID,
  profileID,
  postBody,
  postMediaType,
  postMediaSrc,
  postLikeCount,
  postIsLiked,
  postTopComment,
}: PostCardProps): ReactElement {
  let media: ReactElement | undefined;
  if (postMediaType === "image") {
    media = (
      <Image
        my={2}
        rounded="2xl"
        aspectRatio={5 / 3}
        fit="cover"
        src={postMediaSrc}
      />
    );
  }
  return (
    <Card rounded="2xl" key={`post-${postID}`}>
      <CardHeader pb={2.5}>
        <Flex justifyContent="space-between">
          <ProfileBubble profileID={profileID} />
          <DropMenu />
        </Flex>
      </CardHeader>
      <CardBody p={0} px={5}>
        <Text textAlign="left" px={2} py={2} mb={2} fontSize="md">
          {postBody}
        </Text>
        {media}
      </CardBody>
      <CardFooter pt={0} pb={5} px={5} flexDirection="column">
        <Flex justifyContent="space-between">
          <ButtonGroup spacing={0} variant="ghost">
            <Button
              roundedLeft="xl"
              roundedRight={0}
              colorScheme="colleaguePurple"
              rightIcon={
                postIsLiked ?? false ? <IoMdHeart /> : <IoMdHeartEmpty />
              }
            >
              {postLikeCount}
            </Button>
            <Divider orientation="vertical" />
            <Button
              rounded={0}
              colorScheme="colleaguePurple"
              rightIcon={<IoChatboxEllipsesOutline />}
            >
              Comments
            </Button>
            <Divider orientation="vertical" />
            <Button
              roundedRight="xl"
              roundedLeft={0}
              colorScheme="colleaguePurple"
              rightIcon={<IoMdRepeat />}
            >
              Repost
            </Button>
          </ButtonGroup>
          <Button
            colorScheme="colleaguePurple"
            // variant="outline"
            rightIcon={<IoMdShareAlt />}
            variant="ghost"
          >
            Share
          </Button>
        </Flex>
        {postTopComment !== undefined ? (
          <CommentBubble
            profileID={postTopComment.profileID}
            commentContent={postTopComment.commentContent}
            commentID={postTopComment.commentID}
            commentLikes={postTopComment.commentLikes}
          />
        ) : undefined}
      </CardFooter>
    </Card>
  );
}
PostCard.defaultProps = {
  postMediaType: undefined,
  postMediaSrc: "",
  postIsLiked: false,
  postTopComment: undefined,
};
