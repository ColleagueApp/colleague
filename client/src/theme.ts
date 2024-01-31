// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config: object = {
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    colleaguePurple: {
      100: "#eaddf5",
      200: "#d6bbeb",
      300: "#c29ae1",
      400: "#ae78d7",
      500: "#9A57CD",
      600: "#7b45a4",
      700: "#5c347b",
      800: "#3d2252",
      900: "#1e1129",
    },
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
