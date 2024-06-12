import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Rating,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Results() {
  const navigate = useNavigate();
  const [list, useList] = useState(() => []);
  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((response) => response.json())
      .then((data) => {
        useList(data);
        console.log(data);
      });
  }, []);

  const listItems = list.map((product) => (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345, minHeight: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/public/res1.jpg"
            alt="green iguana"
          />
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="read-only" value={5} readOnly />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  if (list.length === 0) return <p>Loading...</p>;
  return (
    <>
    <header className="home-header">
        <div className="logo" onClick={() => navigate("/")}>Vinden</div>
        <div className="button-Login">
          <button className="sign-up-button" onClick={() => navigate("/login")}>
            Inscreva-se
          </button>
        </div>
      </header>
      <Typography sx={{marginLeft: 5}} variant="body1" color="white">
        Aqui está alguns restaurantes que possam te agradar :)
      </Typography>
      <Grid sx={{padding: [20, 10]}} container spacing={3} justifyContent="center" alignItems="center">
        {listItems}
        {listItems}
      </Grid>
    </>
    
  );
}
