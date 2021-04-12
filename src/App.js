import React from "react";
import './assets/css/custom.css';
import routerConfig from "./core/routerConfig";
import ROUTES from "./routers/routers";


function App() {


  return (


    <>

      {routerConfig(ROUTES)}

    </>



  );
}

export default App;
