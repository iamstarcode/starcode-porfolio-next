import { colors, ColorScheme } from "@vechaiui/react";


export const bee: ColorScheme = {
    id: "bee",
    type: "dark",
    colors: {
      bg: {
        base: colors.blueGray['900'],
        fill: colors.warmGray["100"],
      },
      text: {
        foreground: colors.warmGray["900"],
        muted: colors.warmGray["700"],
      },
      primary: colors.amber,
      neutral: colors.warmGray,
    },
  }