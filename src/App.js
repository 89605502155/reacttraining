import React from "react";
import {Routes, Route} from "react-router-dom";
import {Map} from "./pages/map/Map";
import {Home} from "./pages/Home";
import {News} from "./pages/News.tsx";
import {Navigation} from "./components/Navigation";
import {Publications} from "./pages/publications/Publications";


const App=() =>{
  return(
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/publications" element={<Publications />} />
    </Routes>
    </>
  );
}

export default App;
