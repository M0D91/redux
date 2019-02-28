import React from 'react';
import './progressBar.css';

const ProgressBar = (props) => {
    return (
        <div className='ProgressBar'>
            <input 
                type='range'
                min={0}
                max={props.duration}
                value={props.current}
                onChange={props.target}
            />
        </div>
    )
}

export default ProgressBar;