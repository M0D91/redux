import React from 'react';
import './videoTitle.css';

const Title = (props) => (
    <div className='Title'>
        <h2>
            {props.title}
        </h2>
    </div>
)

export default Title;