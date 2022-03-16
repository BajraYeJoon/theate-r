import React from "react";
import { Routes, Route } from "react-router-dom";

import Favorite from "./pages/Favorite";
import {Home} from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { ShowDesc } from "./pages/ShowDesc";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route exact path="favorite" element={<Favorite />}/>
    

      <Route path="*" element={<NoMatch />}/>

      <Route exact path="show/:id" element={<ShowDesc />}/>
     </Routes>
    </>
  );
}


