import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';

export default function ActiveSubstance() {

  const navigate = useNavigate();
  
  const handleAbobotulinumtoxina =()=> navigate("/abobotulinumtoxina") 
  const handleAmlodipine =()=> navigate("/amlodipine") 
  const handleAdalimumab =()=> navigate("/adalimumab") 
  const handleAlfuzosin =()=> navigate("/alfuzosin") 
  const handleAmoxycilin =()=> navigate("/amoxycilin") 
  const handleAvanafil =()=> navigate("/avanafil") 
  const handleAlbuterol =()=> navigate("/albuterol") 
  const handleAcarbose =()=> navigate("/acarbose")


  return (
    <Card style={{margin:'25px 5px 0px 10px'}}>
    <CardHeader
       sx={{backgroundColor: 'lightBlue'}}
        title="Active Substance"
      />
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Abobotulinumtoxina"
          onClick={()=> handleAbobotulinumtoxina()}

        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Adalimumab"
          onClick={()=> handleAdalimumab()}
         
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Amlodipine"
          onClick={()=> handleAmlodipine()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Acarbose"
          onClick={()=> handleAcarbose()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Amoxycilin"
          onClick={()=> handleAmoxycilin()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Avanafil"
          onClick={()=> handleAvanafil()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Alfuzosin"
          onClick={()=> handleAlfuzosin()} 
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Albuterol"
          onClick={()=> handleAlbuterol()}
        />
      </ListItem>
    </List>
    </Card>
  );
}
