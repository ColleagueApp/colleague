import React, { type ReactElement } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaGhost } from "react-icons/fa";
import SectionMenu from "./SectionMenu";
import NotificationCard from "./NotificationCard/NotificationCard";
import { type NavNotification } from "./NotificationCard/NotificationCardTypes";

export default function NotificationsMenu({
  notifications,
}: {
  notifications: NavNotification[];
}): ReactElement {
  return (
    <SectionMenu
      name="Notifications"
      icon={IoMdNotifications}
      ghostIcon={FaGhost}
      ghostMessage="No new notifications"
    >
      {notifications.map(
        ({
          notificationID,
          userID,
          userAvatar,
          userName,
          content,
          time,
        }: NavNotification) => (
          <NotificationCard
            key={notificationID}
            notificationID={notificationID}
            userID={userID}
            userAvatar={userAvatar}
            userName={userName}
            content={content}
            time={time}
          />
        ),
      )}
    </SectionMenu>
  );
}
