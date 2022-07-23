import { Grid, Card, Button } from "@mui/material";
import { useState } from "react";
import RatingButtons from "../../components/RatingButtons";
import ThankYou from "../ThankYou";
import Icon from "../../assets/icon-star.svg";
import { Container } from "../../themes";

export default function Home() {
  const [rate, setRate] = useState(false);
  const [items, setItems] = useState("");

  return (
    <Card>
      <Grid>
        <Container>
          <img className="star" src={Icon} alt="icone" />
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </Container>
        <RatingButtons setItems={setItems} />

        <Button
          sx={{
            width: "100%",
            borderRadius: "15px",
            fontWeight: "700",
            color: "white",
          }}
          variant="contained"
          onClick={() => setRate(true)}
        >
          SUBMIT
        </Button>
      </Grid>
      {rate && <ThankYou items={items} setRate={setRate} />}
    </Card>
  );
}
