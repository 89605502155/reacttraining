import React from "react";
import {Routes, Route} from "react-router-dom";
import {Map} from "./pages/Map.js";
import {Home} from "./pages/Home.js";

const App=() =>{
  return(
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
