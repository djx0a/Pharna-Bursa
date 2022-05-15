import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from "@mui/material/Typography";
// import classes from './cards.module.css'

const cards = [1, 2, 3, 4, 5, 6];

const PopularProductCards = () => {
  
  return (
    <Container sx={{ mb: 5, ml:0 }} maxWidth="md">
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random"
              alt="random"
              height='200px'
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Medicine
              </Typography>
              <Typography>
               10mg x 150mg/ml
              </Typography>
              <Typography>
               ActiveSubstance
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{justifyItems: 'center'}}>Add to cart</Button>
             
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default PopularProductCards;
