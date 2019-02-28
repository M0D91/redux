import React from 'react';
import './timer.css';

const Timer = (props) => {
    // console.log(props.currentTime, props.duration)
    return (
        <div className='Timer'>
            <p>
                <span>
                    {props.currentTime +' / ' + props.duration}
                </span>
            </p>
        </div>
    )
}

export default Timer;