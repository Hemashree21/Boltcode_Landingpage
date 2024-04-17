import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
