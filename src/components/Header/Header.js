import React from 'react';
import { useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
    const location = useLocation();

    async function handleDownload() {
        const response = await fetch('http://206.189.135.207:3001/api/get-colors');
        const data = await response.json();
    
        // Convert JSON data to SCSS
        let scss = '';
        data.forEach(item => {
            for (let key in item) {
              if (typeof item[key] === 'string') {
                scss += `$${key}: ${item[key]};\n`;
              }
            }
          });
    
        const blob = new Blob([scss], {type: 'text/scss'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'theme-builder.scss';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    return (
    
            <header className='header'>
                <div className='row'>
                    <div className='logo'>
                        <a href='/'>
                            <h1>Theme Provider Tool</h1> 
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
