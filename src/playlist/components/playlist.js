import React from 'react';
import Media from './media.js'
import './playlist.css';


function Playlist(props) {
    return (

        // <div className='Playlist'>
            
            // {
                // playlist.map((item)=>{
                    // return <Media title={item.title} key = {item.id}/>

                    // La magia oscura de abajo "{...item}" se llama 
                    // spread operator y lo que hace es devolver una propiedad 
                    // por cada uno de los elementos del objeto item.
                    // En este caso, item contiene 6 elementos:
                    // title, author, type, cover, src y id

                    // return <Media {...item} key={item.id}/>
                // })
            // }
        // </div>

        <div className='Playlist'>
            {
                props.playlist.map((item)=>{
                    return (
                        <Media 
                            {...item} 
                            key={item.id}
                            openModal={props.handleOpenModal} />
                    )
                })
            }
        </div>
    )
}

export default Playlist;