import { Grid, Card, Button } from "@mui/material";
import { useState } from "react";
import RatingButtons from "../../components/RatingButtons";
import ThankYou from "../ThankYou";
import Icon from "../../assets/icon-star.svg";

export default function Home() {
  const [rate, setRate] = useState(false);
  const [items, setItems] = useState("");

  return (
    <Card>
      <Grid>
        <img src={Icon} alt="icone" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <RatingButtons setItems={setItems} />

        <Button variant="contained" onClick={() => setRate(true)}>
          SUBMIT
        </Button>
      </Grid>
      {rate && <ThankYou items={items} setRate={setRate} />}
    </Card>
  );
}
