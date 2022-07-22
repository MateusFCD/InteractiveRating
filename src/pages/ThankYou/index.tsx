import { Box, Grid, Card, Button } from "@mui/material";
import ImgThank from "../../assets/illustration-thank-you.svg";

interface Props {
  setRate: any;
  items: any;
}

export default function ThankYou({ setRate, items }: Props) {
  return (
    <Card>
      <img src={ImgThank} alt="" />
      <span>You selected {items} out of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <Button variant="contained" onClick={() => setRate(false)}>
        Rate Again
      </Button>
    </Card>
  );
}
