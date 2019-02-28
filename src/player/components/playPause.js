import React from 'react';
import './playPause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

const PlayPause = (props) => {
    // let control;
    // if(props.pause){
    //     console.log('estoy')
    //     control = <button 
    //                     onClick={props.handleClick}
    //                 >
    //                     <Play 
    //                         size={25} 
    //                         color='white'
    //                     />
    //                 </button>
    // } else {
    //     console.log('ya no')
    //     control = <button 
    //                     onClick={props.handleClick}
    //                 >
    //                     <Pause 
    //                         size={25} 
    //                         color='white'
    //                     />
    //                 </button>
    // }
    return (
        <div className='PlayPause'>
            {/* Forma clasica de siempre */}
            {/* {control} */}

            {/* Esto es un if muy loco */}
            {
                props.pause ? /* el signo ? representa la parte inicial del if */

                    <button 
                        onClick={props.handleClick}
                    >
                        <Play 
                            size={25} 
                            color='white'
                        />
                    </button>
                :   /* el signo : representa la parte del else */
                    <button 
                        onClick={props.handleClick}
                    >
                        <Pause 
                            size={25} 
                            color='white'
                        />
                    </button>

            }


        </div>
    )
}

export default PlayPause;