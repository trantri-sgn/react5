import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productApi from "./apis/testApi";
import './assets/css/custom.css';
import routerConfig from "./core/routerConfig";
import HomeLayOut from './LayOut/HomeLayOut';
import ROUTES from "./routers/routers";

function App() {
  const history = useHistory();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await productApi.getAll();
      } catch (error) {
        console.log(error)

      }
    };
    fetchProducts();
  }, []);
  return (


    <>

      {routerConfig(ROUTES)}

    </>



  );
}

export default App;
