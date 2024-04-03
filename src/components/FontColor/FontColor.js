

import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

function FontColor({sendDataToParent,importdata}) {
    const [fontColor, setFontColor] = useState("#0081c6");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const popover = useRef();

    const handleBtnBgColorChange = (color) => {
      setFontColor(color.hex);
      sendDataToParent(color.hex);
    };

    const handleClick = () => {
      setDisplayColorPicker(true);
    };
    useEffect(() => {
        if(importdata) {
        setFontColor(importdata)
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
        <span className='lable-text'>Accent Color:</span>
        <input type="text" value={fontColor} onClick={handleClick} readOnly />
        { displayColorPicker ? <div className="popover" ref={popover}>
            <SketchPicker color={fontColor} onChangeComplete={handleBtnBgColorChange} />
        </div> : null }
        </label>
        </form>
    );
}

export default FontColor;
