import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "./state/actions/auth";
import {LOGIN_SUCCESS} from './state/actions/types';
import Layout from './components/Layout';

function App() {

  const [data, setData] = React.useState(null);

  const {isLoggedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("isLoggedIn",isLoggedIn)
  // const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

  React.useEffect(()=>{
    fetch("/api")
    .then((res)=> res.json())
    .then((data) =>
    setData(data.message));
  },[]);


  
  return (
    <div className="App">
       <p>{!data ? "loading..." : data  }</p>

       <Layout/>
    </div>      
  );
}

export default App;