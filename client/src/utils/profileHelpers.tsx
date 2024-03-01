import { Badge, type TypographyProps } from "@chakra-ui/react";
import React, { type ReactElement } from "react";
import colleges from "./filtered.json";

function DefaultTag({
  text,
  colorScheme,
  textTransform = "uppercase",
  fontSize = "xs",
}: {
  text: string;
  colorScheme: string;
  textTransform: TypographyProps["textTransform"];
  fontSize: TypographyProps["fontSize"];
}): ReactElement {
  return (
    <Badge
      variant="solid"
      px={1.5}
      py={0.5}
      textTransform={textTransform}
      rounded="full"
      colorScheme={colorScheme}
      fontSize={fontSize}
    >
      {text}
    </Badge>
  );
}

export function yearTag(
  code: number,
  abbv: boolean = false,
  fontSize: string = "xs",
): ReactElement {
  const color: Record<number, string> = {
    0: "gray",
    1: "blue",
    2: "cyan",
    3: "teal",
    4: "green",
    5: "green",
  };
  const textFull: Record<number, string> = {
    0: "N/A",
    1: "1 year",
    2: "2 years",
    3: "3 years",
    4: "4 years",
    5: "4+ years",
  };
  const textAbbv: Record<number, string> = {
    0: "N/A",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "4+",
  };
  return (
    <DefaultTag
      text={abbv ? textAbbv[code] : textFull[code]}
      textTransform={abbv ? "uppercase" : "unset"}
      colorScheme={color[code]}
      fontSize={fontSize}
    />
  );
}

export function studentStage(
  code: number,
  abbv: boolean = false,
  fontSize: string = "xs",
): ReactElement {
  const color: Record<number, string> = {
    0: "gray",
    1: "green",
    2: "blue",
    3: "pink",
    4: "yellow",
  };
  const textFull: Record<number, string> = {
    0: "N/A",
    1: "Undergraduate",
    2: "Masters",
    3: "Doctorate",
    4: "Post-Doc",
  };
  const textAbbv: Record<number, string> = {
    0: "N/A",
    1: "U",
    2: "M",
    3: "D",
    4: "PD",
  };
  return (
    <DefaultTag
      textTransform={abbv ? "uppercase" : "unset"}
      text={abbv ? textAbbv[code] : textFull[code]}
      colorScheme={color[code]}
      fontSize={fontSize}
    />
  );
}

// TO be modified in future update
export function collegeByCode(
  code: number,
  fontSize: string = "xs",
): ReactElement {
  const colorOptions: string[] = [
    "gray",
    "red",
    "purple",
    "pink",
    "blue",
    "cyan",
    "green",
    "yellow",
    "orange",
    "teal",
  ];
  let name: string;
  if (code >= 0 && code < colleges.length) {
    name = colleges[code].name;
  } else {
    name = "None";
  }
  const nameCode: number =
    (name.length * Number(name.charCodeAt(name.length - 1))) %
    colorOptions.length;
  return (
    <DefaultTag
      text={name}
      colorScheme={colorOptions[nameCode]}
      textTransform="capitalize"
      fontSize={fontSize}
    />
  );
}
