import { Box, Grid, Card, Button } from "@mui/material";

interface Props {
  setRate: any;
  items: any;
}

export default function ThankYou({ setRate, items }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20rem 2rem",
      }}
    >
      <Card sx={{ width: "500px", padding: "3%", borderRadius: "15px" }}>
        <span>You selected {items} out of 5</span>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <Button onClick={() => setRate(false)}>Rate Again</Button>
      </Card>
    </Box>
  );
}
