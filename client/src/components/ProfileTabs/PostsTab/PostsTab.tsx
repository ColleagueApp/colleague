import React, { type ReactElement } from "react";
import { PiSignpostFill } from "react-icons/pi";
import { Flex, Divider } from "@chakra-ui/react";
import PostCard, { type PostCardProps } from "../../PostCard/PostCard";
import { ProfilePanel, ProfileTab } from "../ProfileTabs";

// TODO: Fetch posts from profilePosts
function fetchPosts(): PostCardProps[] {
  return [
    {
      profileID: "19282",
      postBody: "Hello y'all just posting this piece!",
      postID: "11233",
      postLikeCount: 234,
      postIsLiked: true,
    },
    {
      postBody: "Hello y'all just posting this piece!",
      profileID: "19282",
      postID: "11233",
      postLikeCount: 234,
      postMediaType: "image",
      postMediaSrc:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      postTopComment: {
        commentContent: "Nice post!",
        commentID: "123456",
        commentLikes: 122,
        profileID: "98090",
      },
    },
  ];
}
export function PostsTab(): ReactElement {
  return <ProfileTab icon={PiSignpostFill} title="Posts" />;
}

export function PostsPanel(): ReactElement {
  const posts: PostCardProps[] = fetchPosts();
  return (
    <ProfilePanel>
      {posts.length > 0 ? (
        <Flex direction="column">
          {posts.map(
            ({
              postBody,
              postID,
              postLikeCount,
              profileID,
              postIsLiked,
              postMediaSrc,
              postMediaType,
              postTopComment,
            }: PostCardProps) => (
              <>
                <PostCard
                  postBody={postBody}
                  postID={postID}
                  postLikeCount={postLikeCount}
                  profileID={profileID}
                  postIsLiked={postIsLiked}
                  postMediaSrc={postMediaSrc}
                  postMediaType={postMediaType}
                  postTopComment={postTopComment}
                />
                <Divider my={4} colorScheme="colleaguePurple" />
              </>
            ),
          )}
        </Flex>
      ) : undefined}
    </ProfilePanel>
  );
}
