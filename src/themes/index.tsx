import { Box, Grid, Button, Card } from "@mui/material";
import styled from "styled-components";

export const Skeleton = styled(Box)`
  background-color: hsl(216, 12%, 8%);
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 30% 20%;
  font-family: "Overpass", sans-serif;
`;

export const GridStyle = styled(Grid)`
  background-color: hsl(213, 19%, 18%);

  img {
    background-color: hsl(213, 19%, 30%);
    padding: 5%;
    border-radius: 50%;
  }

  h2 {
    color: hsl(0, 0%, 100%);
    font-size: 1.85rem;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    color: hsl(217, 12%, 63%);
  }
`;

export const ButtonStyle = styled(Button)`
  background-color: #fb7413;
`;
