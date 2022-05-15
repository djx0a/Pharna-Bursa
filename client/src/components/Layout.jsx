import React from "react";
import { render } from "react-dom";

import {BrowserRouter ,Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Screens/home";
import Insulin from "./Insulin";
import SyringesAndNeedles from "./SyringesAndNeedles";
import InjectableSteroids from "./Screens/InjectableSteroids";
import OralSteroids from "./Screens/OralSteroids";
import SkinHealth from "./Screens/SkinHealth";
import Diabetes from "./Screens/Diabetes";
import PostCycleTherapy from "./Screens/PostCycyletherapy";
import HghPeptides from "./Screens/HghPeptides";
import MedicineDetails from "./Screens/MedicineDetails";
import Cart from "./Screens/Cart/Cart";
import UltimaPharmaceuticals from "./manufacturers/UltimaPharmaceuticals";
import UltimaPeptides from "./manufacturers/UltimaPeptides";
import DragonPharma from "./manufacturers/DragonPharma";
import SexualWellness from "./Screens/SexualWellness";
import Pharmaqo from "./manufacturers/Pharmaqo";
import Warehouse1 from "./warehouses/Warehouse1";
import Warehouse2 from "./warehouses/Warehouse2";
import Warehouse3 from "./warehouses/Warehouse3";
import Warehouse4 from "./warehouses/Warehouse4";
import Abobotulinumtoxina from "./activeSubstances/Abobotulinumtoxina";
import Acarbose from "./activeSubstances/Acarbose";
import Adalimumab from "./activeSubstances/Adalimumab";
import Amlodipine from "./activeSubstances/Amlodipine";
import Albuterol from "./activeSubstances/Albuterol";
import Avanafil from "./activeSubstances/Avanafil";
import Amoxycilin from "./activeSubstances/Amoxycilin";
import Alfuzosin from "./activeSubstances/Alfuzosin";
import WriteReview from "./Screens/WriteReview";
// import WeightManagement from './'

const Layout =()=>{
return(
    <>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/medicine-details" element={<MedicineDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/skin-health" element={<SkinHealth />} />
          <Route path="/oral-steroids" element={<OralSteroids />} />
          <Route path="/injectable-steroids" element={<InjectableSteroids />} />
          <Route path="/hgh-peptides" element={<HghPeptides />} />
          <Route path="/insulin" element={<Insulin />} />
          <Route path="/syringe-needles" element={<SyringesAndNeedles />} />
          <Route path="/post-cycle-therapy" element={<PostCycleTherapy />} />
          <Route path="/ultima-pharmaceuticals" element={<UltimaPharmaceuticals />} />
          <Route path="/ultima-peptides" element={<UltimaPeptides />} />
          <Route path="/dragon-pharma" element={<DragonPharma />} />
          <Route path="/sexual-wellness" element={<SexualWellness />} />
          <Route path="/pharmaqo" element={<Pharmaqo />} />
          <Route path="/warehouse1" element={<Warehouse1 />} />
          <Route path="/warehouse2" element={<Warehouse2 />} />
          <Route path="/warehouse3" element={<Warehouse3 />} />
          <Route path="/warehouse4" element={<Warehouse4 />} />
          <Route path="/abobotulinumtoxina" element={<Abobotulinumtoxina />} />
          <Route path="/acarbose" element={<Acarbose />} />
          <Route path="/adalimumab" element={<Adalimumab />} />
          <Route path="/amlodipine" element={<Amlodipine />} />
          <Route path="/albuterol" element={<Albuterol />} />
          <Route path="/alfuzosin" element={<Alfuzosin />} />
          <Route path="/avanafil" element={<Avanafil />} />
          <Route path="/amoxycilin" element={<Amoxycilin />} />
          <Route path="/medicine-details" element={<MedicineDetails />} />
          <Route path="/write-review" element={<WriteReview />} />

          {/* <Route path="/weight-management" element={<WeightManagement />} /> */}
        </Routes>
    </>
)
};

export default Layout;
