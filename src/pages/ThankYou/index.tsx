import { Box, Grid, Card, Button } from "@mui/material";
import ImgThank from "../../assets/illustration-thank-you.svg";
import { Container } from "../../themes";

interface Props {
  setRate: any;
  items: any;
}

export default function ThankYou({ setRate, items }: Props) {
  return (
    <Card
      sx={{
        width: "100%",
        heigth: "100%",
        display: "block",
        position: "relative",
        textAlign: "center",
        alignContent: "center",
        zIndex: "1",
      }}
    >
      <Container>
        <img className="imgThank" src={ImgThank} alt="" />
        <h6>You selected {items} out of 5</h6>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </Container>
      <Button
        sx={{
          width: "100%",
          borderRadius: "15px",
          fontWeight: "700",
          color: "white",
        }}
        variant="contained"
        onClick={() => setRate(false)}
      >
        Rate Again
      </Button>
    </Card>
  );
}
