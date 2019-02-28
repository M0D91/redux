import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import MuteIcon from '../../icons/components/mute';
import './volume.css';

const Volume = (props) => {
    // console.log('valgo: ', props.mute)
    return (
        <button className='Volume'>
            <div 
                onClick={props.muteToggle}
            >

                {props.mute ? 
                    <MuteIcon
                    size={25}
                    color='white'
                    />
                :
                    <VolumeIcon 
                        size={25}
                        color='white'
                    />    
            }
            </div>

            <div className='Volume-range'>
                <input
                    type ='range'
                    min = {0}
                    max = {1}
                    step={.05}
                    onChange= {props.volume}
                />
            </div>
        </button>
    )
}

export default Volume;