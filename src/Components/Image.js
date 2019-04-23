import React from 'react';
import './Img.css'
const Image = (props) => {
    return (
        <div className="container">
            <div className="item"> 
            <img src={props.url} onClick={() => props.pushClick(props)} /> 
            </div>

        </div>
    )
}

export default Image;



