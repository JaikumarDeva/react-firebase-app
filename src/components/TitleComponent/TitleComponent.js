import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

function TitleComponent({sendDataToParent,importdata}) {
  const [titleColor, setTitleColor] = useState("#FFFFFF");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const popover = useRef();

    const handleTitleColorChange = (color) => {
        setTitleColor(color.hex);
      sendDataToParent(color.hex);
    };

    const handleClick = () => {
      setDisplayColorPicker(true);
    };
    useEffect(() => {
        if(importdata) {
            setTitleColor(importdata);
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
        <span className='lable-text'>Heading Text color:</span>
        <input type="text" value={titleColor} onClick={handleClick} readOnly />
        { displayColorPicker ? <div className="popover" ref={popover}>
            <SketchPicker color={titleColor} onChangeComplete={handleTitleColorChange} />
        </div> : null }
        </label>
        </form>
    );
}

export default TitleComponent;