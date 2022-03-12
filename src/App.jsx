import React from "react";
import { Routes, Route } from "react-router-dom";

import Favorite from "./pages/Favorite";
import {Home} from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="favorite" element={<Favorite />}/>
    

      <Route path="*" element={<NoMatch />}/>
     </Routes>
    </>
  );
}


