import { IoMdPerson } from "react-icons/io";
import React, { type ReactElement } from "react";
import { ProfilePanel, ProfileTab } from "../ProfileTabs";

export function CanvasTab(): ReactElement {
  return <ProfileTab title="Canvas" icon={IoMdPerson} />;
}

export function CanvasPanel(): ReactElement {
  // TODO: Create Canvas Panel
  return <ProfilePanel />;
}
