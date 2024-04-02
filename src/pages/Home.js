import React, { useState,useEffect } from "react";
import "../App.css";
import FontColor from "../components/FontColor/FontColor";
import BackgroundColor from "../components/BackgroundColor/BacgroundColor";
import BtnBgColor from "../components/BtnBgColor/BtnBgColor";
import BtnTextColor2 from "../components/BtnTextColor/BtnTextColor";
import FontSize from "../components/FontSize/FontSize";
import LeftSideComponent from "../components/LeftSideComponent/LeftSideComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";

import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({importedData}) {
    let [fColor, setFColor] = useState("");
    let [BGColor, setBGColor] = useState("");
    let [BtnTextColor1, setBtntextColor] = useState("");
    let [BtnbgColor, setBtnbgColor] = useState("");
    let [fontSize, setfontSize] = useState("");
    let [titleColor, settitleColor] = useState("");
    
    //const [datafromImport, setdatafromImport] = useState("");
    useEffect(() => {
      if(importedData?.length>0) {
        const obj = importedData
        .split('\r\n') 
        .map(keyVal => { 
          return keyVal
            .split(':')
            .map(_ => _.trim().replace(',',"")) 
        })
        .reduce((accumulator, currentValue) => { 
          accumulator[currentValue[0]] = currentValue[1]

          return accumulator
        }, {}) 
        // const item = data[0];
                //localStorage.setItem('color_id', item.color_id);
                localStorage.setItem('fColor', obj.fontColor);
                localStorage.setItem('BGColor', obj.backgroundColor);
                localStorage.setItem('BtnTextColor1', obj.BtnTextColor);
                localStorage.setItem('BtnbgColor', obj.BtnBgcolor);
                localStorage.setItem('fontSize', obj.fontSize);
                localStorage.setItem('titleColor',obj.titleColor)
        setFColor(obj.fontColor);
        setBGColor(obj.backgroundColor);
        setBtntextColor(obj.BtnTextColor);
        setBtnbgColor(obj.BtnBgcolor);
        setfontSize(obj.fontSize);
        settitleColor(obj.titleColor);

    }
    },[importedData])
    
    function handleDataFromChildFC(data) {
        setFColor(data);
      }
      function handleDataFromChildBG(data) {
        setBGColor(data);
      }
      function handleDataFromChildBtnBg(data) {
        setBtnbgColor(data);
      }
      function handleDataFromChildBtnTxt(data) {
        setBtntextColor(data);
      }
      function handleDataFromChildFontSize(data) {
        setfontSize(data);
      }
      
      function handleDataFromChildtitleColor(data) {
        settitleColor(data);
      }

      fetch('http://206.189.135.207:3001/api/color-id')
      .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data from server:', data); // Log the entire data object
      let color_id = data.color_id;
      let fColor = data.fontColor;
      let BGColor = data.backgroundColor;
      let BtnTextColor1 = data.BtnTextColor;
      let BtnbgColor = data.BtnBgcolor;
      let fontSize = data.fontSize;
      let titlColor = data.titleColor;
      localStorage.setItem('color_id', color_id);
      localStorage.setItem('fColor', fColor);
      localStorage.setItem('BGColor', BGColor);
      localStorage.setItem('BtnTextColor1', BtnTextColor1);
      localStorage.setItem('BtnbgColor', BtnbgColor);
      localStorage.setItem('fontSize', fontSize);
      localStorage.setItem('titlColor', titlColor);
    })
    .catch(error => {
      console.error('Error:', error);
  });

  let applyColor = () => {
  
    console.log(fColor, BGColor, BtnTextColor1, BtnbgColor, fontSize, titleColor);

    if (!fColor) {
      fColor = localStorage.getItem('fColor'); 
    }
    if (!BGColor) {
      BGColor = localStorage.getItem('BGColor');
    }
    if (!BtnTextColor1) {
      BtnTextColor1 = localStorage.getItem('BtnTextColor1');
    }
  if (!BtnbgColor) {
      BtnbgColor =  localStorage.getItem('BtnbgColor');
  }
  if (!fontSize) {
      fontSize =localStorage.getItem('fontSize');
  }
  if (!titleColor) {
    titleColor =localStorage.getItem('titleColor');
}
    
    // Send a request to the server to update the JSON file
    fetch('http://206.189.135.207:3001/api/update-color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fontColor: fColor,
        backgroundColor: BGColor,
        BtnTextColor: BtnTextColor1,
        BtnBgcolor: BtnbgColor,
        fontSize: fontSize,
        titleColor: titleColor
      }),
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(_ => {
      const modalElement = document.getElementById('successModal');
      const bsModal = new Modal(modalElement);
      document.getElementById('modalMessage').textContent = 'Data submitted successfully.';
      bsModal.show(); // Show the success modal
  })
  .catch(error => {
    console.error('Error:', error);
    const modalElement = document.getElementById('successModal');
    const bsModal = new Modal(modalElement);
    document.getElementById('modalMessage').textContent = 'Error: ' + error.message;
    bsModal.show(); // Show the error modal
  });
  };

  return (
    <div className="App">
      <div className="max-container">
        <div className="row content-wrapper">
          <div className="col-lg-3 left-section">
            <h3 className="sidebar-title">Select Your Theme</h3>
            <BackgroundColor importdata={BGColor} sendDataToParent={handleDataFromChildBG} />
            <FontColor importdata={fColor} sendDataToParent={handleDataFromChildFC} />
            <BtnBgColor importdata={BtnbgColor } sendDataToParent={handleDataFromChildBtnBg} />
            <BtnTextColor2 importdata={BtnTextColor1} sendDataToParent={handleDataFromChildBtnTxt} />
            <FontSize importdata={fontSize} sendDataToParent={handleDataFromChildFontSize} />
            <TitleComponent importdata={titleColor} sendDataToParent={handleDataFromChildtitleColor}/>
            <button className="apply-color" onClick={applyColor}>Apply Color</button>
          </div>
          <div className="col-lg-9 right-section" style={{  backgroundColor: BGColor }}>
             <LeftSideComponent fColor={fColor} BGColor={BGColor} BtnTextColor1={BtnTextColor1} BtnbgColor={BtnbgColor} fontSize={fontSize} titleColor={titleColor}/>
            </div>
          </div>
        </div>
        <div id="successModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Message</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="modalMessage"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
      </div>
   
  );
}
export default App;
