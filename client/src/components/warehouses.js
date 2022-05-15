import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';

export default function Warehouses() {

  const navigate = useNavigate();

  const handleWarehouse1 =()=> navigate('/warehouse1');
  const handleWarehouse2 =()=> navigate('/warehouse2');
  const handleWarehouse3 =()=> navigate('/warehouse3');
  const handleWarehouse4 =()=> navigate('/warehouse4');

  return (
    <Card style={{margin:'25px 5px 20px 10px'}}>
    <CardHeader
       sx={{backgroundColor: 'lightBlue'}}
        title="Warehouses"
      />
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary= " EU Warehouses"
          onClick={()=> handleWarehouse1()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="US WareHouses"
          onClick={()=> handleWarehouse2()}
         
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="UK WareHouses"
          onClick={()=> handleWarehouse3()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="International Warehouses"
          onClick={()=> handleWarehouse4()}
        />
      </ListItem><Divider variant="verticle" component="li" />
    </List>
    </Card>
  );
}
