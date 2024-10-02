import React from 'react';
import './style.css'

export const SchemeColor = ({color}) => {
    return(
        <div className="scheme-color" style={{backgroundColor: color}}>
            {color}
        </div>
    )
}