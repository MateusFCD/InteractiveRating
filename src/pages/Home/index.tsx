import { Box, Grid, Card, Button } from "@mui/material";
import { useState } from "react";
import RatingButtons from "../../components/RatingButtons";
import ThankYou from "../ThankYou";

export default function Home({ items }: any) {
  const [rate, setRate] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20rem 2rem",
      }}
    >
      <Card sx={{ width: "500px", padding: "3%", borderRadius: "15px" }}>
        <Grid>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <Box>
            <RatingButtons />
          </Box>
          <Button onClick={() => setRate(true)}>SUBMIT</Button>
        </Grid>
      </Card>
      {rate && <ThankYou items={items} setRate={setRate} />}
    </Box>
  );
}
