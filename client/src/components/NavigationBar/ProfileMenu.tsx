import React, { type ReactElement } from "react";
import {
  useColorModeValue,
  Menu,
  MenuButton,
  Button,
  Avatar,
  AvatarBadge,
  MenuList,
  Flex,
  VStack,
  MenuDivider,
  MenuGroup,
  MenuItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import { HiOutlineCog } from "react-icons/hi2";
import { RiEmotionLine } from "react-icons/ri";

interface ProfileMenuProps {
  profileImage: string;
}
export default function ProfileMenu({
  profileImage,
}: ProfileMenuProps): ReactElement {
  const colleagueColor: string = useColorModeValue(
    "colleaguePurple.500",
    "colleaguePurple.300",
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="full"
        variant="link"
        cursor="pointer"
        minW={0}
      >
        <Avatar
          outline="20px"
          outlineColor={colleagueColor}
          size="sm"
          src={profileImage}
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList>
        {/* TODO: Connect Profile section with AuthContexts */}
        <Flex direction="column" justifyContent="center" m={3}>
          <VStack>
            <Avatar
              outline="20px"
              outlineColor={colleagueColor}
              size="md"
              src={profileImage}
            >
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
            <VStack spacing={0}>
              <Text as="b">AuthContext User Name</Text>
              <Text as="cite" fontSize="sm">
                AuthContext Status
              </Text>
              {/* TODO: Display badges for college status, year and school */}
            </VStack>
          </VStack>
        </Flex>
        <MenuDivider />
        {/* Options section */}
        {/* TODO: Make section responsive instead of hardcoding. */}
        <MenuGroup title="Profile">
          <MenuItem icon={<Icon fontSize="md" as={RiEmotionLine} />}>
            Change Status
          </MenuItem>
          <MenuItem icon={<Icon fontSize="md" as={HiOutlineCog} />}>
            Profile Settings
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem icon={<Icon fontSize="md" as={CiLogout} />} color="red">
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
