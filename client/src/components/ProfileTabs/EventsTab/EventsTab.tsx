import React, { type ReactElement } from "react";
import { IoMdCalendar } from "react-icons/io";
import { ProfilePanel, ProfileTab } from "../ProfileTabs";

export function EventsTab(): ReactElement {
  // TODO: Create Events Tab
  return <ProfileTab title="Events" icon={IoMdCalendar} />;
}

export function EventsPanel(): ReactElement {
  // TODO: Create Events Panel
  return <ProfilePanel />;
}
