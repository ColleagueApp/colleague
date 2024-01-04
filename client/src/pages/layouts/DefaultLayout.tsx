import { Flex } from "@chakra-ui/react";
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
  return <Flex justifyContent="center">{children}</Flex>;
}
