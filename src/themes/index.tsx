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
          margin: "10% auto 0 auto",
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
            height: "6vh",
            backgroundColor: "#33363a",
            color: "hsl(216, 12%, 54%)",
            fontWeight: "700",
          },
        },
      ],
    },
  },
});

export const Container = styled.div`
  .star {
    background-color: #33363a;
    padding: 5%;
    border-radius: 50%;
  }
  .imgThank {
    margin-bottom: 3%;
  }
  h6 {
    color: hsl(25, 97%, 53%);
    background: #343941;
    padding: 2%;
    font-weight: 400;
    border-radius: 30px;
    width: 150px;
    margin: auto;
  }

  h2 {
    color: white;
  }
  p {
    color: hsl(217, 12%, 63%);
  }
`;
