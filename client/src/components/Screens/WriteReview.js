import React, { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
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
const WriteReview=()=>{

    const [file, setFile] = useState();

    const handleChange=( event)=>{
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        axios.post(url, formData, config).then((response) => {
          console.log(response.data);
        });
    
      }

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
            <Container sx={{py:2}}>
            <StarIcon sx={{justifyContent:"left", display: 'flex'}}/>
            </Container>
        <Container  sx={{py: 4, display: "flex" , justifyContent:"left" }}>
            <form onSubmit={handleSubmit}>
                <textarea id="w3review" name="w3review" rows="10" cols="50">

                </textarea>
                <br/>

                <input type="file" onChange={()=> handleChange} />
                <button type="submit"> Post </button>
                <img src="" />
            </form>

        
        </Container>
    <Footer />
    </>
    )
}

export default WriteReview;