import { Box, Grid, Button, Card, createTheme } from "@mui/material";
import styled from "styled-components";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(25, 97%, 53%)",
    },
    secondary: {
      main: "#2a2b2c",
    },
    background: {
      default: "hsl(216, 12%, 8%)",
      paper: "hsl(213, 19%, 18%)",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "400px",
          borderRadius: "15px",
          padding: "2%",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "50%",
            fontSize: "1rem",
            padding: "0px",
            height: "9vh",
            backgroundColor: "hsl(216, 12%, 54%)",
          },
        },
      ],
    },
  },
});
