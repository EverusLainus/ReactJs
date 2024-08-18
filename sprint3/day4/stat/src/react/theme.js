import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      "*:focus": {
        outline: "none",
        boxShadow: "none",
      },
      "button:focus": {
        outline: "none",
        boxShadow: "none",
      },
      "a:focus": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
});

export default customTheme;
