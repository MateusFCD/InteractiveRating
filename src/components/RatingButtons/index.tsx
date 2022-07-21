import { TrafficRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import ThankYou from "../../pages/ThankYou";

export default function RatingButtons() {
  const [items, setItems] = useState(number);

  return (
    <Box>
      <Grid container spacing={2}>
        {number.map((item, index) => (
          <Grid key={index}>
            <Button onClick={() => setItems(items)}>{item["value"]}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
const number = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];
