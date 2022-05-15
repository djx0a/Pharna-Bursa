import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Select from '@mui/material/Select';  
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { useStyles } from "./navbar.style";

const pages = ["HOME","CATEGORIES" ,"MANUFACTURERS", "WAREHOUSES", "CONTACT", "FAQ"];

const Navbar = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleHome = () => navigate("/");
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
  const handleSyringesAndNeedles = () => navigate("/syringe-needles");
  const handleAnacillaries = () => navigate("/anacillaries");
  const handleDragonPharma =()=> navigate("/dragon-pharma");
  const handleUltimapharmaceuticals =()=> navigate("/ultima-pharmaceuticals");
  const handleUltimaPeptides =()=> navigate("/ultima-peptides");
  const handlePharmaqo =()=> navigate("/pharmaqo");
  const handleWarehouse1 =()=> navigate('/warehouse1');
  const handleWarehouse2 =()=> navigate('/warehouse2');
  const handleWarehouse3 =()=> navigate('/warehouse3');
  const handleWarehouse4 =()=> navigate('/warehouse4');

  return (
    <AppBar
      position="static"
      className={classes.appbar}
      style={{ backgroundColor: "#f7f7f7" , boxShadow:'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            
              <List
                sx={{
                  // width: "160%",
                  maxWidth: 100,
                  mr:4,
                  justifyContent:'space-between',
                  bgcolor: "background.paper",
                }}
                component="nav"
              >
                <ListItemButton>
                  <ListItemText primary="HOME" onClick={handleHome} />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary="CATEGORIES" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                       primary="INJECTABLE STEROIDS" 
                       onClick={handleInjectableSteroids} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="ORAL STEROIDS"
                        onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="POST CYCLE THERAPY"
                        onClick={handlePostCycleTherapy}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="WEIGHT MANAGEMENT"
                        onClick={handleWeightManagement}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="SEXUAL WELLNESS"
                        onClick={handleSexualWellness}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="HGH &PEPTIDES"
                        onClick={handleHghPeptides}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="SARMS"
                        onClick={handleSarms}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="INSULIN"
                        onClick={handleInsulin}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="SYRINGES AND NEEDLES"
                        onClick={handleSyringesAndNeedles}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="ANCILLARIES"
                        onClick={handleAnacillaries}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="DIABETES"
                        onClick={handleDiabetes}
                      />
                    </ListItemButton><ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="SKIN HEALTH"
                        onClick={handleSkinhealth}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton onClick={handleClick1}>
                  <ListItemText primary="MANUFACTURERS" />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                       primary="Ultima pharmaceuticals" 
                       onClick={handleInjectableSteroids} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="Dragon pharma"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="Ultima Peptides"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="PharmaQO"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClick2}>
                  <ListItemText primary="WAREHOUSES" />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                       primary="WareHouse 1" 
                      //  onClick={handleInjectableSteroids} 

                       />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="WareHouse 2"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="Warehouse 3"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText
                        primary="WareHouse 4"
                        // onClick={handleOralSteroids}
                      />
                    </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                  <ListItemText primary="CONTACT" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </List>

          </Box>
          <Box sx={{  justifyContent:'space-evenly'  ,display: { xs: "none", md: "flex" } }}>
            <div style={{margin:'0px 40px 0px 66px'}}>
              <Button
                variant="transparent"
                className={classes.navItemColor}
                style={{ color: "#828282" ,fontWeight: "bold" }}
                onClick={handleHome}
              >
                HOME
              </Button>
            </div>
            <div style={{margin:'0px 40px'}}>
             <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="transparent"
                      {...bindTrigger(popupState)}
                      className={classes.navItemColor}
                      style={{ color: "#828282" ,fontWeight: "bold" }}
                    >
                      CATEGORIES
                    </Button>
                    <Menu className={{paper: classes.menuListItem}} {...bindMenu(popupState)}>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=> handleInjectableSteroids()}
                      >
                        INJECTABLE STEROIDS
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=> handleOralSteroids()}
                      >
                        ORAL STEROIDS
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=> handlePostCycleTherapy()}
                      >
                        POST CYCLE THERAPY
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close/}
                        onClick={handleWeightManagement}
                      >
                        WEIGHT MANAGEMENT
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=> handleSexualWellness()}
                      >
                        SEXUAL WELLNESS
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={handleHghPeptides}
                      >
                        HGH & PEPTIDES
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          
            <div style={{margin:'0px 40px'}}>
             
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="transparent"
                      {...bindTrigger(popupState)}
                      className={classes.navItemColor}
                      style={{ color: "#828282", fontWeight: "bold" }}
                    >
                      MANUFACTURERS
                    </Button>
                    <Menu className={{paper: classes.menuListItem}} {...bindMenu(popupState)}>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleUltimapharmaceuticals()}
                      >
                        Ultima pharmaceuticals
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleUltimaPeptides()}
                      >
                        Ultima Peptides
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleDragonPharma()}
                      >
                        Dragon Pharma
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handlePharmaqo()}
                      >
                        PharmaQO
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
            <div style={{margin:'0px 40px'}}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="transparent"
                      {...bindTrigger(popupState)}
                      className={classes.navItemColor}
                      style={{ color: "#828282" , fontWeight: "bold" }}
                    >
                      WAREHOUSES
                    </Button>
                    <Menu className={{paper: classes.menuListItem}} {...bindMenu(popupState)}>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleWarehouse1()}
                      >
                        WareHouse 1
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleWarehouse2()}
                      >
                        WareHouse 2
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleWarehouse3()}
                      >
                        Warehouse 3
                      </MenuItem>
                      <MenuItem
                        // onClick={popupState.close}
                        onClick={()=>handleWarehouse4()}
                      >
                        Warehouse 4
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
            <div style={{margin:'0px 40px'}}>
              <Button
                variant="transparent"
                className={classes.navItemColor}
                style={{ color: "#828282", fontWeight: "bold" }}
                onClick={handleOpenDialog}
              >
                Contact Us
              </Button>
            </div>
            <div style={{margin:'0px 40px'}}>
              <Button
                variant="transparent"
                className={classes.navItemColor}
                style={{ color: "#828282", fontWeight: "bold" }}
                onClick={handleOpenDialog}
              >
                FAQ
              </Button>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
