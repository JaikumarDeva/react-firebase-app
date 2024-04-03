import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-1.jpg';


function Layout({sendDataToParent}) {
    const navigate = useNavigate();
    const fileInput = useRef();
    const handleImportClick = () => {
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.show();
    };
    const handleCloseModel = () => {
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        myModalEl.classList.remove('show');
        myModalE2.remove();
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
        let body = document.querySelector('body');
        body.classList.remove('modal-open');
        body.classList.add('remove-hidden');
    }
    const handleFileUpload = (e) => {
        const file = fileInput.current.files[0];
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = (event) => {
        //         const data = JSON.parse(event.target.result);
        //         console.log(data);
        //         // Assuming the JSON data is an array and you want to store the first item
        //         const item = data[0];
        //         localStorage.setItem('color_id', item.color_id);
        //         localStorage.setItem('fColor', item.fontColor);
        //         localStorage.setItem('BGColor', item.backgroundColor);
        //         localStorage.setItem('BtnTextColor1', item.BtnTextColor);
        //         localStorage.setItem('BtnbgColor', item.BtnBgcolor);
        //         localStorage.setItem('fontSize', item.fontSize);
        //     };
        //     reader.readAsText(file);
        // }
        // Handle the file upload here
       // console.log(file);
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.hide();
        var reader = new FileReader();
        var fileToRead = document.querySelector('input').files[0];
        reader.addEventListener("loadend", function() {
       // alert(reader.result);
        sendDataToParent(reader.result);
        });
        reader.readAsText(fileToRead);
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        myModalEl.classList.remove('show');
        myModalE2.remove();
        let body = document.querySelector('body');
        body.classList.remove('modal-open');
        body.classList.add('remove-hidden')
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
        navigate("/home")
    };
    
  return (
    <div className="App mt-5">
       <div className="teamLogo">
                {/*  eslint-disable-next-line */}
                <img src={logo} className="img-fluid" />
            </div>
        <br/>
        <p>The Theme Provider allows you to customize and create new custom themes with absolute ease. select one of the following options:</p>
        <br/>
        <div className="text-center">
        <div className="flex-wrapper">
            <div onClick={() => navigate("/home")} className="select_base_theme">
                Select a Theme
            </div>
            <div onClick={handleImportClick} className="select_base_theme">
               Import a Theme
            </div>
        </div>
        </div>
        <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="uploadModalLabel">Upload CSS File</h5>
                                        <button type="button" onClick={handleCloseModel} className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <input accept=".json" type="file" ref={fileInput} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={handleCloseModel}  className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
      </div>
   
  );
}
export default Layout;
