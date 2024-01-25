import React, { type ReactElement } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Flex } from "@chakra-ui/react";
import SectionMenu from "./SectionMenu";
import NotificationCard from "./NotificationCard/NotificationCard";
import { type NavNotification } from "./NotificationCard/NotificationCardTypes";

const TestNotification: NavNotification[] = [
  {
    notificationID: "90210",
    userID: "9191919",
    userAvatar:
      "https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg",
    userName: "Monkey D. Luffy",
    content: {
      userID: "19191919",
      time: new Date(),
      postID: "91919191",
      postText: "Ore wa monkey d. luffy",
    },
  },
  {
    notificationID: "90211",
    userID: "9191919",
    userAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZkoa8vTu2NFuse7HSpwwa0Yos-3Eb0GXym3slEv3PA&s",
    userName: "Nami",
    content: {
      userID: "19191919",
      time: new Date(),
      postID: "91919191",
      comment: "WTF LUFFY!!!!",
      commentID: "192920",
    },
  },
  {
    notificationID: "90211",
    userID: "9191919",
    userAvatar:
      "https://w0.peakpx.com/wallpaper/350/172/HD-wallpaper-nico-robin-icon-nico-robin-one-piece.jpg",
    userName: "Nico Robin",
    content: {
      userID: "19191919",
      time: new Date(),
      postID: "91919191",
      comment: "WTF LUFFY!!!!",
      commentID: "192920",
      originalCommentID: "9223003",
      newComment: "NVM....",
    },
  },
  {
    notificationID: "90210",
    userID: "9191919",
    userAvatar:
      "https://wallpapers-clan.com/wp-content/uploads/2022/08/zoro-pfp-1.jpg",
    userName: "Roronoa Zoro",
    content: {
      userID: "19191919",
      time: new Date(),
      postID: "91919191",
      postText:
        "Ore wa monkey d. luffy blah blah blah blah blah blah vsjkhdfjk,hrfgjwseh",
      newPostID: "120902390",
    },
  },
  {
    notificationID: "90210",
    userID: "9191919",
    userAvatar:
      "https://i.pinimg.com/474x/03/39/96/03399605d08958c05ce51e3c3e5c7b69.jpg",
    userName: "Chopper",
    content: {
      birthDate: new Date(),
      time: new Date(),
    },
  },
];
export default function NotificationsMenu(): ReactElement {
  return (
    <SectionMenu name="Notifications" icon={IoMdNotifications}>
      <Flex
        p={3}
        direction="column"
        scrollBehavior="smooth"
        overflowY="auto"
        maxH="75vh"
      >
        {TestNotification.map(
          ({
            notificationID,
            userID,
            userAvatar,
            userName,
            content,
          }: NavNotification) => (
            <NotificationCard
              key={notificationID}
              notificationID={notificationID}
              userID={userID}
              userAvatar={userAvatar}
              userName={userName}
              content={content}
            />
          ),
        )}
      </Flex>
    </SectionMenu>
  );
}
