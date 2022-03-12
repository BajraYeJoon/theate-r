import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Favorite from "./pages/Favorite";
import {Home} from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path="favorite" element={<Favorite />}/>
    

      <Route path="*" element={<NoMatch />}/>
    </Routes>
    </>
  );
}

export default App;
