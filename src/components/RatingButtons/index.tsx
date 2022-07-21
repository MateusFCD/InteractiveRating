import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function RatingButtons({ setItems }: any) {
  return (
    <Box>
      <Grid container spacing={2}>
        {number.map((item, index) => (
          <Grid key={index}>
            <Button onClick={() => setItems(item["value"])}>
              {item["value"]}
            </Button>
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
