import { Button, Grid } from "@mui/material";

interface Props {
  setItems: any;
}

export default function RatingButtons({ setItems }: Props) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10% 0",
        heigth: "100px",
      }}
    >
      {number.map((item, index) => (
        <Grid key={index}>
          <Button variant="rounded" onClick={() => setItems(item["value"])}>
            {item["value"]}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
const number = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];
