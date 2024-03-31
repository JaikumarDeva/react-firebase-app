import React from 'react';
import { useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
    const location = useLocation();

    const handleDownload = async () => {
        const response = await fetch('http://206.189.135.207:3001/api/get-colors');
        const data = await response.json();
      
        // Remove the color_id field from each item in the data array
        data.forEach(item => {
          delete item.color_id;
        });
      
        const json = JSON.stringify(data);
        const blob = new Blob([json],{type:'application/json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'theme-builder.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
    return (
    
            <header className='header'>
                <div className='row'>
                    <div className='logo'>
                        <a href='/'>
                            <h1>Theme Builder</h1> 
                        </a>
                    </div>
                    <div className='downloadJson'>
                    {location.pathname === '/home' && (
                        <button className="apply-color" onClick={handleDownload}>Download</button>
                    )}
                     </div>
                
                </div>
            </header>
        );
    
};


export default Header;
