import React from 'react';
import { Navigate, useNavigate } from 'react-router';
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
import Banner from '../banner';
import Cards from '../Cards';
import Categories from '../categories';
import ActiveSubstance from '../activeSubstance';
import Manufacturers from '../manufacturers';
import Warehouses from '../warehouses';
import PopularProductCards from '../popularProductsCard';
import NewProducts from '../newProducts';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import HeaderTop from './headerTop';
import { Container } from '@mui/material';
const theme = createTheme();



export default function Home() {
  const navigate = useNavigate();
  
  const handleLogin =()=> navigate("/login");
  
  const handleSignup =()=> navigate("/signup");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderTop/>
      <Header/>
      <HeaderNavbar/>
      <Banner/>
      <main>
            <Container>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Categories/>
                    <ActiveSubstance/>
                    <Manufacturers/>
                    <Warehouses/>
                </Grid>
                <Grid item xs={9}>
                    <div>
                    <h2 style={{display: 'flex',marginLeft: '22px', paddingTop:'36px'}}>Products on Sale</h2>
                    <Cards/>
                    </div>
                    <div>
                    <h2 style={{display: 'flex',marginLeft: '22px'}}>Popular Products</h2>
                      <PopularProductCards/>
                    </div>
                    <div>
                    <h2 style={{display: 'flex', marginLeft: '22px'}}>New Products</h2>
                      <NewProducts/>
                    </div>
                </Grid>
              </Grid>
            </Container>  

      <Footer/>
      </main>
     
    </ThemeProvider>
  );
}