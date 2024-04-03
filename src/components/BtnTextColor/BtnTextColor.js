import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

function BtnTextColor({sendDataToParent,importdata}) {
  const [BtnTextColor1, setBtnTextColor] = useState("#FFFFFF");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const popover = useRef();

    const handleBtnBgColorChange = (color) => {
      setBtnTextColor(color.hex);
      sendDataToParent(color.hex);
    };

    const handleClick = () => {
      setDisplayColorPicker(true);
    };
    useEffect(() => {
        if(importdata) {
        setBtnTextColor(importdata)
        }
    },[importdata])
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popover.current && !popover.current.contains(event.target)) {
                setDisplayColorPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <form>
        <label>
        <span className='lable-text'>Button Text color:</span>
        <input type="text" value={BtnTextColor1} onClick={handleClick} readOnly />
        { displayColorPicker ? <div className="popover" ref={popover}>
            <SketchPicker color={BtnTextColor1} onChangeComplete={handleBtnBgColorChange} />
        </div> : null }
        </label>
        </form>
    );
}

export default BtnTextColor;
