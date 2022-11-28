import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AddNewInternship from "./pages/AddNewInternship";


function App() {
  return (
    // <div>
    //   <Home />
    //   <AddNewInternship />
    // </div>

    // setup React Router DOM 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-new-internship" element={<AddNewInternship />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
