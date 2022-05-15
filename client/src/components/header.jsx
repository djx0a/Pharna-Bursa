import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Screens/headerTop.css';
import Cart from './Screens/Cart/Cart';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  borderRight: 'none',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));



const Header=(props)=> {

  const [open, setOpen] = React.useState(false);

  const handleOpen =()=>{
    setOpen(true);
  }

  return (
    <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3 col-xs-12"> 
           
            <div class="logo"><a title="e-commerce" href="#">Pharma<span class="logoSub">Bursa</span></a> </div>
         
          </div>
          <div class="col-xs-9 col-sm-6 col-md-7"> 
         
            <div class="top-search">
              <div id="search">
                <form>
                  <div class="input-group">
                    <select class="cate-dropdown hidden-xs" name="category_id">
                      <option>All Categories</option>
                      <option>Injectable Steroids</option>
                      <option>Oral Steroids </option>
                      <option>Post Cycle Therapy</option>
                      <option>Diabetes</option>
                      <option>Hgh & Peptides </option>
                      <option>Skin Health </option>
                      <option>Weight Management </option>
                    </select>
                    <input type="text" class="form-control" placeholder="Search" name="search" />
                    <button class="btn-search" type="button"><SearchIcon/></button>
                  </div>
                </form>
              </div>
            </div>
            
          
          </div>
      
          
           <div class="col-lg-2 col-xs-3 top-cart">
            <div class="top-cart-contain">
              <div class="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                  <Cart open={open} close={()=> setOpen(false)}/>
                </div>
                {/* <div>
                  <div class="top-cart-content">
                    <div class="block-subtitle hidden-xs">R   ecently added item(s)</div>
                    <ul id="cart-sidebar" class="mini-products-list">
                      <li class="item odd"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img07.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                        <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                          <p class="product-name"><a href="#">Lorem ipsum dolor sit amet Consectetur</a> </p>
                          <strong>1</strong> x <span class="price">$20.00</span> </div>
                      </li>
                      <li class="item even"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img11.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                        <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                          <p class="product-name"><a href="#">Consectetur utes anet adipisicing elit</a> </p>
                          <strong>1</strong> x <span class="price">$230.00</span> </div>
                      </li>
                      <li class="item last odd"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img10.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                        <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                          <p class="product-name"><a href="#">Sed do eiusmod tempor incidist</a> </p>
                          <strong>2</strong> x <span class="price">$420.00</span> </div>
                      </li>
                    </ul>
                    <div class="top-subtotal">Subtotal: <span class="price">$520.00</span></div>
                    <div class="actions">
                      <button class="btn-checkout" type="button"><i class="fa fa-check"></i><span>Checkout</span></button>
                      <button class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <span>View Cart</span></button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div> 
        </div>
      </div>
  );
}

export default Header;