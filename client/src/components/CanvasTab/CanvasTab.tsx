import { Flex } from "@chakra-ui/react";
import React, { type PropsWithChildren, type ReactElement } from "react";

export default function CanvasTab({
  children,
}: PropsWithChildren): ReactElement {
  return <Flex>{children}</Flex>;
}
