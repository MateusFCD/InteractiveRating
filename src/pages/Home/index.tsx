import { Box, Grid, Card, Button } from "@mui/material";
import { useState } from "react";
import RatingButtons from "../../components/RatingButtons";
import ThankYou from "../ThankYou";
import { Skeleton, GridStyle, ButtonStyle } from "../../themes/index";
import Icon from "../../assets/icon-star.svg";

export default function Home() {
  const [rate, setRate] = useState(false);
  const [items, setItems] = useState("");

  return (
    <Skeleton>
      <Box>
        <Card
          sx={{
            width: "400px",
            padding: "10%",
            borderRadius: "30px",
            backgroundColor: "hsl(213, 19%, 18%)",
          }}
        >
          <GridStyle>
            <Grid>
              <img src={Icon} alt="icone" />
              <h2>How did we do?</h2>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <Box>
                <RatingButtons setItems={setItems} />
              </Box>

              <Button
                sx={{ backgroundColor: "#fb7413" }}
                variant="contained"
                onClick={() => setRate(true)}
              >
                SUBMIT
              </Button>
            </Grid>
          </GridStyle>
        </Card>

        {rate && <ThankYou items={items} setRate={setRate} />}
      </Box>
    </Skeleton>
  );
}
