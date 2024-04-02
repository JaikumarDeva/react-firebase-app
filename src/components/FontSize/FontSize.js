import React, { useState,useEffect } from 'react';


function FontSize({sendDataToParent,importdata}) {
    const [FontSize, setFontSize] = useState("16px");
    const handleBackgroundColorChange = (event) => {
      setFontSize(event.target.value);  
      sendDataToParent(event.target.value);
      };
      useEffect(() => {
        if(importdata) {
          setFontSize(importdata);
        }
      },[importdata]) 
    return (
        <form>
        <label>
        <span className='lable-text'>Primary Font Size:</span>
          <div className='color-box'><input type="input" value={FontSize} onChange={handleBackgroundColorChange} />
        </div></label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default FontSize;
