import React from "react";
import { Container, Grid, Table, TableCell } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import Header from "../header";
import Navbar from "../navbar"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {TableBody, TableRow} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import './MedicineDetails.css'
import Footer from "../footer";
import Cards from "../Cards";
import HeaderTop from "./headerTop";
import Reviews from "./Reviews";
import { useNavigate } from "react-router";


const MedicineDetails=()=>{

    const navigate = useNavigate();
    const handleWriteReview=()=> navigate("/write-review")

    const Details =[
        {
            name:'ACTIVE HALF-LIFE',
            value:'5-7 Days'
        },{
            name:'CLASSIFICATION',
            value:'Anabolic Steroid'
        },
        {
            name:'DOSAGE',
            value:'Men 250-600 mg/week'
        },
        {
            name:'ACNE',
            value:'Rarely'
        },
        {
            name:'WATER RETENTION',
            value:'Low'
        },
        {
            name:'HBR',
            value:'No'
        },
        {
            name:'HBHEPATOTOXICITYR',
            value:'Low'
        },
        {
            name:'AROMATIZATION',
            value:'Medium'
        },
        {
            name:'Manufacturer',
            value:'Ultima Pharmaceuticals - US'
        },
        {
            name:'SUBSTANCE',
            value:'Boldenone Undecylenat'
        },
        {
            name:'WAREHOUSE(s)',
            value:'USA Warehouses 5'
        },

    ]

    return(
        <>
       <HeaderTop/>
       <Header/>
       <Navbar/>
            <Container>
                <Grid container spacing={2}>
            
                <Grid container item xs={6}>
                    <Container style={{display: 'flex',marginLeft: '22px', paddingTop:'36px'}}>

                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                        height= '450px'
                        width='500px'
                    />
                    </Container>
                    
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <div style={{display: 'flex',marginLeft: '22px', paddingTop:'36px'}}>
                        <Typography variant="h4" gutterBottom component="div">
                            Medicine Name
                            <Typography variant="subtitle1" gutterBottom component="div" sx={{marginLeft:'2px', display:'flex'}}>
                                Manufacturer Name
                            </Typography>
                            <h3 style={{display:"flex"}} >$43</h3>
                        </Typography>    
                        </div>
                        <Table>
                            <TableBody>
                                {Details.map(item => <TableRow>
                                    <TableCell sx={{border:'none', lineHeight: '2px'}}>
                                        {item.name}
                                    </TableCell>
                                    <TableCell sx={{border:'none', lineHeight: '2px'}}>
                                        {item.value}
                                    </TableCell>
                                </TableRow>)}
                            </TableBody>
                        </Table>
                   </Container>
                </Grid>
                
            </Grid>
            </Container>

            {/*Description & reviews  */}
            <Container sx={{display:'flex', justifyContent:'left', paddingTop:'60px'}}>
                <Button variant="contained" size="large">
                    Description
                </Button>
                <Button variant="outline" sx={{marginLeft:'20px'}} size="large"  >
                    Reviews
                </Button>
            </Container>

            <div className="" >
                <p className="medDetail">
                Ultima-Test/EQ 400 Mix is a steroid mix of: Boldenone Undecylenate (200 mg) and Testosterone Enanthate (200 mg).

                Testosterone Enanthate is the strongest steroid with anabolic and androgenic activity. Dissolved ester in oil, enters gradually in the blood. Due to the fact that there is Enanthate, it has a positive effect on the body more than one month.

                Boldenone Undecylenate – is a derived synthetic anabolic steroid, which includes a derivative of the male hormone testosterone. Equipoise is considered one of the few drugs with no flavorings.

                Boldenone is a very popular steroid among bodybuilders, weightlifters, and those who prefer the power load. The key to this success is the main feature of Boldenone: stimulation of the formation of the hormone erythropoietin which is responsible for the creation of red blood cells. Incidentally, a drug characterized in that, it enables to work on the dry weight of an athlete.

                Testosterone Enanthate helps to increase strength, burn fat, and Boldenone allows you to gain quality mass with a minimum of side effects. After Ultima-Test/EQ 400 Mix cycle, you should take Anastrozole (Arimidex) to reduce side effects of Testosterone Enanthate (possible water retention, appearance of gynecomastia).

                Now, EQ/Test E recommended dosage is 250-600 mg once a week. These dosages are for beginners who have just started to take the Anabolic Steroids.

                Warnings: Keep out of reach of children. For adults only. 
                </p>
            </div>

            <Container>
                <Button variant="contained" sx={{ justifyContent: 'left' , display:'flex' }} size="large" onClick={()=> handleWriteReview()}>
                    + Write Your Review
                </Button>
            </Container>
            
            <Container>
                <h2 style={{display: 'flex',marginLeft: '22px', paddingTop:'36px'}}>Related Products</h2>           
                <Container>
                    <Cards/>
                </Container>
            </Container>

            <Footer/>
        </>
    )
}

export default MedicineDetails;