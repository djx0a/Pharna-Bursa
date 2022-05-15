import * as React from 'react';
import { useNavigate } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

export default function Manufacturers() {
  const navigate = useNavigate();

  const handleDragonPharma =()=> navigate("/dragon-pharma");
  const handleUltimapharmaceuticals =()=> navigate("/ultima-pharmaceuticals");
  const handleUltimaPeptides =()=> navigate("/ultima-peptides");
  const handlePharmaqo =()=> navigate("/pharmaqo");

  return (
    <Card style={{margin:'25px 5px 0px 10px'}}>
    <CardHeader
       sx={{backgroundColor: 'lightBlue'}}
        title="Manufacturers"
      />
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Ultima Pharmacueticals"
          onClick={()=> handleUltimapharmaceuticals()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Dragon Pharma"
          onClick={()=>handleDragonPharma()}
         
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="PharmaQo"
          onClick={()=> handlePharmaqo()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Ultima Peptides"
          onClick={()=> handleUltimaPeptides()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Text5"
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Text6"
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Text7"
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Text8"
        />
      </ListItem>
    </List>
    </Card>
  );
}
