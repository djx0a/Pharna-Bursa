import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../header';
import Grid from '@mui/material/Grid';
import HeaderNavbar from '../navbar';
import Footer from '../footer';
import Cards2 from '../Cards2';
import Categories from '../categories';
import ActiveSubstance from '../activeSubstance';
import Manufacturers from '../manufacturers';
import Warehouses from '../warehouses';
import HeaderTop from '../Screens/headerTop';
import { Container } from '@mui/material';

const theme = createTheme();

export default function Amoxycilin() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderTop/>
      <Header/>
      <HeaderNavbar/>
      <main>
           <Container> 
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Categories/>
                    <ActiveSubstance/>
                    <Manufacturers/>
                    <Warehouses/>
                </Grid>
                <Grid item xs={9}>
                    <div>
                    <h2 style={{display: 'flex',marginLeft: '22px', paddingTop:'36px' ,textAlign:'center'}}>Amoxycilin</h2>
                    <Cards2/>
                    </div>
                   
                </Grid>
                
            </Grid>
            </Container>
      <Footer/>
      </main>
     
    </ThemeProvider>
  );
}
