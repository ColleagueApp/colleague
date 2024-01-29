import { Flex, useColorModeValue } from "@chakra-ui/react";
import React, {
  type ReactNode,
  type PropsWithChildren,
  type ReactElement,
} from "react";

interface DefaulttLayoutProps {
  children: PropsWithChildren<ReactNode>;
}
export default function DefaultLayout({
  children,
}: DefaulttLayoutProps): ReactElement {
  return (
    <Flex
      bg={useColorModeValue("gray.200", "gray.800")}
      justifyContent="center"
    >
      {children}
    </Flex>
  );
}
