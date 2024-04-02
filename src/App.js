import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  const [importData, setimportData] = useState("");
  const handleDataFromChildCMP = (data) => {
    setimportData(data);
  }
  return (
    <div className="App">

    <BrowserRouter>
    <Header />
          <Routes>
          <Route path="/home" element={<Home importedData={importData}/>} />
          <Route path="/" element={<Layout sendDataToParent={handleDataFromChildCMP} />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
      </div>
   
  );
}

export default App;
