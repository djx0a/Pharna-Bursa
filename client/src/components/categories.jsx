import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';


export default function Categories() {

  const navigate = useNavigate();

  const handleInjectableSteroids = () => navigate("/injectable-steroids");
  const handleOralSteroids = () => navigate("/oral-steroids");
  const handleHghPeptides = () => navigate("/hgh-peptides");
  const handleSarms = () => navigate("/sarms");
  const handlePostCycleTherapy = () => navigate("/post-cycle-therapy");
  const handleWeightManagement = () => navigate("/weight-management");
  const handleSexualWellness = () => navigate("/sexual-wellness");
  const handleInsulin = () => navigate("/insulin");
  const handleDiabetes = () => navigate("/diabetes");
  const handleSkinhealth = () => navigate("/skin-health");



  return (
    <Card style={{margin:'25px 5px 0px 10px'}}>
    <CardHeader
       sx={{backgroundColor: 'lightBlue'}}
        title="Categories"
      />
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Injectable Steroids"
          onClick={()=> handleInjectableSteroids()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Oral Steroids"
          onClick={()=> handleOralSteroids()}
         
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Post Cycle Therapy"
          onClick={()=> handlePostCycleTherapy()}
        />
      </ListItem>
      <Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Skin Heatlth"
          onClick={()=> handleSkinhealth()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="HGH & Peptides"
          onClick={()=>handleHghPeptides()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Diabetes"
          onClick={()=> handleDiabetes()}
        />
      </ListItem><Divider variant="verticle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Sexual Wellness"
          onClick={()=> handleSexualWellness()}
        />
      </ListItem>
    </List>
    </Card>
  );
}
