import { createStitches, globalCss } from "@stitches/react";
import * as Stitches from "@stitches/react";

const { styled, css } = createStitches({
  theme: {
    space: {
      none: 0, xxs: ".875rem", xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.375rem", xl: "1.5rem", xxl: "1.625rem"
    },
    sizes: {
      none: 0, xxs: ".875rem", xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.375rem", xl: "1.5rem", xxl: "1.625rem"
    },
    lineHeights: {
      none: 0, xxs: ".875rem", xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.375rem", xl: "1.5rem", xxl: "1.625rem"
    },
    fontSizes: {
      xxs: ".875rem", xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.375rem", xl: "1.5rem", xxl: "1.625rem"
    },
    colors: {
      blue100: "#d4e8f6",
      blue: "#268bd2",
      cyan100: "#cceef3",
      cyan: "#00ACC1",
      danger100: "#e0918f",
      danger: "#cc4744",
      dark100: "rgba(0, 0, 0, 0.1)",
      dark: "#1d1e21",
      green100: "#d9ede2",
      green: "#43a76f",
      indigo100: "#9da6d9",
      indigo: "#5C6BC0",
      info100: "#66cdda",
      info: "#00ACC1",
      light100: "rgba(255, 255, 255, 0.1)",
      light: "#414246",
      orange100: "#f4e1d6",
      orange: "#c76932",
      pink100: "#e593aa",
      pink: "#d44b71",
      primary100: "#7db9e4",
      primary: "#268bd2",
      purple100: "#bba9da",
      purple: "#8e70c1",
      red100: "#f5dada",
      red: "#cc4744",
      secondary100: "#96afba",
      secondary: "#50798c",
      success100: "#8ecaa9",
      success: "#43a76f",
      teal100: "#7ec0ba",
      teal: "#28968c",
      warning100: "#dda584",
      warning: "#c76932",
      white: "#fff",
      yellow100: "#ffe691",
      yellow: "#ffd648",
      transparent: "transparent"
    },
    fonts: {
      tahoma: "Tahoma, sans-serif",
      inter: "Inter, sans-serif",
      roboto: `Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
    }
  }
});

const globalStyles = globalCss({
  "@import": [`url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')`],
  "html": {
    fontSize: 16
  },
  "body": {
    margin: 0,
    padding: 0,
    backgroundColor: "$bg",
    fontFamily: "$roboto",
    color: "#4b4b4b",

    "& *": {
      boxSizing: "border-box"
    }
  }
});

const basicVariants = css({
  variants: {
    v_position: {
      relative: { position: "relative" },
      static: { position: "static" }
    },
    v_fontSize: {
      xxs: { fontSize: "$xxs!important" },
      xs: { fontSize: "$xs!important" },
      s: { fontSize: "$s!important" },
      m: { fontSize: "$m!important" },
      l: { fontSize: "$l!important" },
      xl: { fontSize: "$xl!important" },
      xxl: { fontSize: "$xxl!important" }
    },
    v_padding: {
      none: { paddingLeft: "$none", paddingRight: "$none", paddingTop: "$none", paddingBottom: "$none" },
      xxs: { paddingLeft: "$xxs", paddingRight: "$xxs", paddingTop: "$xxs", paddingBottom: "$xxs" },
      xs: { paddingLeft: "$xs", paddingRight: "$xs", paddingTop: "$xs", paddingBottom: "$xs" },
      s: { paddingLeft: "$s", paddingRight: "$s", paddingTop: "$s", paddingBottom: "$s" },
      m: { paddingLeft: "$m", paddingRight: "$m", paddingTop: "$m", paddingBottom: "$m" },
      l: { paddingLeft: "$l", paddingRight: "$l", paddingTop: "$l", paddingBottom: "$l" },
      xl: { paddingLeft: "$xl", paddingRight: "$xl", paddingTop: "$xl", paddingBottom: "$xl" },
      xxl: { paddingLeft: "$xxl", paddingRight: "$xxl", paddingTop: "$xxl", paddingBottom: "$xxl" }
    },
    v_paddingX: {
      none: { paddingLeft: "$none", paddingRight: "$none" },
      xxs: { paddingLeft: "$xxs", paddingRight: "$xxs" },
      xs: { paddingLeft: "$xs", paddingRight: "$xs" },
      s: { paddingLeft: "$s", paddingRight: "$s" },
      m: { paddingLeft: "$m", paddingRight: "$m" },
      l: { paddingLeft: "$l", paddingRight: "$l" },
      xl: { paddingLeft: "$xl", paddingRight: "$xl" },
      xxl: { paddingLeft: "$xxl", paddingRight: "$xxl" }
    },
    v_paddingY: {
      none: { paddingTop: "$none", paddingBottom: "$none" },
      xxs: { paddingTop: "$xxs", paddingBottom: "$xxs" },
      xs: { paddingTop: "$xs", paddingBottom: "$xs" },
      s: { paddingTop: "$s", paddingBottom: "$s" },
      m: { paddingTop: "$m", paddingBottom: "$m" },
      l: { paddingTop: "$l", paddingBottom: "$l" },
      xl: { paddingTop: "$xl", paddingBottom: "$xl" },
      xxl: { paddingTop: "$xxl", paddingBottom: "$xxl" }
    },
    v_paddingLeft: {
      none: { paddingLeft: "$none" },
      xxs: { paddingLeft: "$xxs" },
      xs: { paddingLeft: "$xs" },
      s: { paddingLeft: "$s" },
      m: { paddingLeft: "$m" },
      l: { paddingLeft: "$l" },
      xl: { paddingLeft: "$xl" },
      xxl: { paddingLeft: "$xxl" }
    },
    v_paddingRight: {
      none: { paddingRight: "$none" },
      xxs: { paddingRight: "$xxs" },
      xs: { paddingRight: "$xs" },
      s: { paddingRight: "$s" },
      m: { paddingRight: "$m" },
      l: { paddingRight: "$l" },
      xl: { paddingRight: "$xl" },
      xxl: { paddingRight: "$xxl" }
    },
    v_paddingTop: {
      none: { paddingTop: "$none" },
      xxs: { paddingTop: "$xxs" },
      xs: { paddingTop: "$xs" },
      s: { paddingTop: "$s" },
      m: { paddingTop: "$m" },
      l: { paddingTop: "$l" },
      xl: { paddingTop: "$xl" },
      xxl: { paddingTop: "$xxl" }
    },
    v_paddingBottom: {
      none: { paddingBottom: "$none" },
      xxs: { paddingBottom: "$xxs" },
      xs: { paddingBottom: "$xs" },
      s: { paddingBottom: "$s" },
      m: { paddingBottom: "$m" },
      l: { paddingBottom: "$l" },
      xl: { paddingBottom: "$xl" },
      xxl: { paddingBottom: "$xxl" }
    },
    v_margin: {
      none: { marginLeft: "$none", marginRight: "$none", marginTop: "$none", marginBottom: "$none" },
      xxs: { marginLeft: "$xxs", marginRight: "$xxs", marginTop: "$xxs", marginBottom: "$xxs" },
      xs: { marginLeft: "$xs", marginRight: "$xs", marginTop: "$xs", marginBottom: "$xs" },
      s: { marginLeft: "$s", marginRight: "$s", marginTop: "$s", marginBottom: "$s" },
      m: { marginLeft: "$m", marginRight: "$m", marginTop: "$m", marginBottom: "$m" },
      l: { marginLeft: "$l", marginRight: "$l", marginTop: "$l", marginBottom: "$l" },
      xl: { marginLeft: "$xl", marginRight: "$xl", marginTop: "$xl", marginBottom: "$xl" },
      xxl: { marginLeft: "$xxl", marginRight: "$xxl", marginTop: "$xxl", marginBottom: "$xxl" }
    },
    v_marginX: {
      none: { marginLeft: "$none", marginRight: "$none" },
      xxs: { marginLeft: "$xxs", marginRight: "$xxs" },
      xs: { marginLeft: "$xs", marginRight: "$xs" },
      s: { marginLeft: "$s", marginRight: "$s" },
      m: { marginLeft: "$m", marginRight: "$m" },
      l: { marginLeft: "$l", marginRight: "$l" },
      xl: { marginLeft: "$xl", marginRight: "$xl" },
      xxl: { marginLeft: "$xxl", marginRight: "$xxl" }
    },
    v_marginY: {
      none: { marginTop: "$none", marginBottom: "$none" },
      xxs: { marginTop: "$xxs", marginBottom: "$xxs" },
      xs: { marginTop: "$xs", marginBottom: "$xs" },
      s: { marginTop: "$s", marginBottom: "$s" },
      m: { marginTop: "$m", marginBottom: "$m" },
      l: { marginTop: "$l", marginBottom: "$l" },
      xl: { marginTop: "$xl", marginBottom: "$xl" },
      xxl: { marginTop: "$xxl", marginBottom: "$xxl" }
    },
    v_marginLeft: {
      none: { marginLeft: "$none" },
      xxs: { marginLeft: "$xxs" },
      xs: { marginLeft: "$xs" },
      s: { marginLeft: "$s" },
      m: { marginLeft: "$m" },
      l: { marginLeft: "$l" },
      xl: { marginLeft: "$xl" },
      xxl: { marginLeft: "$xxl" }
    },
    v_marginRight: {
      none: { marginRight: "$none" },
      xxs: { marginRight: "$xxs" },
      xs: { marginRight: "$xs" },
      s: { marginRight: "$s" },
      m: { marginRight: "$m" },
      l: { marginRight: "$l" },
      xl: { marginRight: "$xl" },
      xxl: { marginRight: "$xxl" }
    },
    v_marginTop: {
      none: { marginTop: "$none" },
      xxs: { marginTop: "$xxs" },
      xs: { marginTop: "$xs" },
      s: { marginTop: "$s" },
      m: { marginTop: "$m" },
      l: { marginTop: "$l" },
      xl: { marginTop: "$xl" },
      xxl: { marginTop: "$xxl" }
    },
    v_marginBottom: {
      none: { marginBottom: "$none" },
      xxs: { marginBottom: "$xxs" },
      xs: { marginBottom: "$xs" },
      s: { marginBottom: "$s" },
      m: { marginBottom: "$m" },
      l: { marginBottom: "$l" },
      xl: { marginBottom: "$xl" },
      xxl: { marginBottom: "$xxl" }
    },
    "v_bgc": {
      blue100: { backgroundColor: "$blue100", color: "$dark" },
      blue: { backgroundColor: "$blue", color: "$white" },
      cyan100: { backgroundColor: "$cyan100", color: "$dark" },
      cyan: { backgroundColor: "$cyan", color: "$white" },
      danger100: { backgroundColor: "$danger100", color: "$dark" },
      danger: { backgroundColor: "$danger", color: "$white" },
      dark100: { backgroundColor: "$dark100", color: "$dark" },
      dark: { backgroundColor: "$dark", color: "$white" },
      green100: { backgroundColor: "$green100", color: "$dark" },
      green: { backgroundColor: "$green", color: "$white" },
      indigo100: { backgroundColor: "$indigo100", color: "$dark" },
      indigo: { backgroundColor: "$indigo", color: "$white" },
      info100: { backgroundColor: "$info100", color: "$dark" },
      info: { backgroundColor: "$info", color: "$white" },
      light100: { backgroundColor: "$light100", color: "$white" },
      light: { backgroundColor: "$light", color: "$white" },
      orange100: { backgroundColor: "$orange100", color: "$dark" },
      orange: { backgroundColor: "$orange", color: "$white" },
      pink100: { backgroundColor: "$pink100", color: "$dark" },
      pink: { backgroundColor: "$pink", color: "$white" },
      primary100: { backgroundColor: "$primary100", color: "$dark" },
      primary: { backgroundColor: "$primary", color: "$white" },
      purple100: { backgroundColor: "$purple100", color: "$dark" },
      purple: { backgroundColor: "$purple", color: "$white" },
      red100: { backgroundColor: "$red100", color: "$dark" },
      red: { backgroundColor: "$red", color: "$white" },
      secondary100: { backgroundColor: "$secondary100", color: "$dark" },
      secondary: { backgroundColor: "$secondary", color: "$white" },
      success100: { backgroundColor: "$success100", color: "$dark" },
      success: { backgroundColor: "$success", color: "$white" },
      teal100: { backgroundColor: "$teal100", color: "$dark" },
      teal: { backgroundColor: "$teal", color: "$white" },
      warning100: { backgroundColor: "$warning100", color: "$dark" },
      warning: { backgroundColor: "$warning", color: "$white" },
      white: { backgroundColor: "$white", color: "$dark" },
      yellow100: { backgroundColor: "$yellow100", color: "$dark" },
      yellow: { backgroundColor: "$yellow", color: "$white" },
      transparent: {backgroundColor: "$transparent", color: 'inherit'}
    },
    v_color: {
      blue100: { color: "$blue100" },
      blue: { color: "$blue" },
      cyan100: { color: "$cyan100" },
      cyan: { color: "$cyan" },
      danger100: { color: "$danger100" },
      danger: { color: "$danger" },
      dark100: { color: "$dark100" },
      dark: { color: "$dark" },
      green100: { color: "$green100" },
      green: { color: "$green" },
      indigo100: { color: "$indigo100" },
      indigo: { color: "$indigo" },
      info100: { color: "$info100" },
      info: { color: "$info" },
      light100: { color: "$light100" },
      light: { color: "$light" },
      orange100: { color: "$orange100" },
      orange: { color: "$orange" },
      pink100: { color: "$pink100" },
      pink: { color: "$pink" },
      primary100: { color: "$primary100" },
      primary: { color: "$primary" },
      purple100: { color: "$purple100" },
      purple: { color: "$purple" },
      red100: { color: "$red100" },
      red: { color: "$red" },
      secondary100: { color: "$secondary100" },
      secondary: { color: "$secondary" },
      success100: { color: "$success100" },
      success: { color: "$success" },
      teal100: { color: "$teal100" },
      teal: { color: "$teal" },
      warning100: { color: "$warning100" },
      warning: { color: "$warning" },
      white: { color: "$white" },
      yellow100: { color: "$yellow100" },
      yellow: { color: "$yellow" }
    }
  }
});

export type BasicVariants = Stitches.VariantProps<typeof basicVariants>

export {
  styled,
  globalStyles,
  basicVariants
};


