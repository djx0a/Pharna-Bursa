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
import Cards from '../Cards';
import Categories from '../categories';
import ActiveSubstance from '../activeSubstance';
import Manufacturers from '../manufacturers';
import Warehouses from '../warehouses';

const theme = createTheme();

export default function Diabetes() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{justifyContent:"space-between"}}>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap sx={{ ml: 3 }}>
            Wishlist(0)
          </Typography>
          <div style={{ marginRight:2 , display:'flex'}} >
            <Button variant="outline-none" color='inherit'>login</Button>
            <div style={{borderRight: '1px solid white' }}/>
            <Button variant="outline-none" color='inherit'>Signup</Button>
          </div>
        
        </Toolbar>
      </AppBar>
      <Header/>
      <HeaderNavbar/>
      <main>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Categories/>
                    <ActiveSubstance/>
                    <Manufacturers/>
                    <Warehouses/>
                </Grid>
                <Grid item xs={9}>
                    <div>
                    <h2 style={{display: 'flex',marginLeft: '22px', paddingTop:'36px'}}>DIABETES</h2>
                    <Cards/>
                    </div>
                   
                </Grid>
                
            </Grid>
      <Footer/>
      </main>
     
    </ThemeProvider>
  );
}
