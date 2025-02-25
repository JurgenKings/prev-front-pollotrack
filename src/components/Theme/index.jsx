import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffd600",
      light: "rgb(255, 222, 51)",
      dark: "#b29500"
    },
    secondary: {
      main: "#800020",
      light: "rgb(153, 51, 76)",
      dark: "rgb(89, 0, 22)"
    },
    text: {
      main: "rgba(0, 0, 0, 0.7)"
    }
  },
})

export { theme }