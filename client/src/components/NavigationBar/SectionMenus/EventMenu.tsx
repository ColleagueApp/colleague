import React, { type ReactElement } from "react";
import { IoMdCalendar } from "react-icons/io";
// import { Flex, MenuItem, Text } from "@chakra-ui/react";
import { MdEventBusy } from "react-icons/md";
import SectionMenu from "./SectionMenu";

// function EventCard(): ReactElement {
//   return (
//     <MenuItem rounded="2xl">
//       <Text> TODO: EventCard </Text>
//     </MenuItem>
//   );
// }
export default function EventMenu(): ReactElement {
  return (
    <SectionMenu
      name="Events"
      icon={IoMdCalendar}
      ghostIcon={MdEventBusy}
      ghostMessage="No new events"
    >
      {/* TODO: Event Menu
      <Flex p={3}>
        <EventCard />
      </Flex> */}
    </SectionMenu>
  );
}
