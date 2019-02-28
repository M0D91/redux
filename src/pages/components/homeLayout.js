import React from 'react';
import './homeLayout.css'

function HomeLayout(props) {
    return (
        <section className='HomeLayout'>
            {props.children}
        </section>
    )
}

export default HomeLayout;