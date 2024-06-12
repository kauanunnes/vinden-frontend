import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Rating,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">Vinden</div>
        <div className="button-Login">
          <button className="sign-up-button" onClick={() => navigate("/login")}>
            Inscreva-se
          </button>
        </div>
      </header>
      <main>
        <div className="main-container">
          <div className="left-container">
            <div className="paragraph">
              Descubra lugares incríveis para ter{" "}
              <span>experiências gastronômicas!</span>
            </div>
            <div className="search-bar">
              <form onSubmit={(e) => {e.preventDefault(); navigate("/results")}}>
              <input type="text" placeholder="Mate sua fome agora" />
              </form>
            </div>
          </div>
          <div className="right-container">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
        </div>
        <div className="restaurant-section">
          <div className="restaurant-display-title">
            Restaurantes mais bem avaliados da semana
          </div>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/public/res1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Sabores da Terra
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Rating name="read-only" value={5} readOnly />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/public/res2.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Brasil Cerrado
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Rating name="read-only" value={5} readOnly />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/public/res3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kikoto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Rating name="read-only" value={4} readOnly />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default Home;
