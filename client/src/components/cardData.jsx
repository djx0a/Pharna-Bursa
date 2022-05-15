import React from "react";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";

const CardData = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Cards
        //   image={}
          title="Medicine 1 $50"
          description="10mg x 15mg/ml"
          buttonText={'Add to cart'}

        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cards
        //   image={}
          title="Medcine 2   $50"
          description="10mg x 150mg/ml"
          buttonText={'Add to cart'}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cards
        //   image={}
          title="Medcine 3   $50"
          description="10mg x 150mg/ml"
          buttonText={'Add to cart'}
        />
      </Grid>
    </Grid>
  );
};

export default CardData;
