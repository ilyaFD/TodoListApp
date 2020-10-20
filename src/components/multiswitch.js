import React from 'react';

import './multiswitch.css';

const Multiswitch = ({switchStates, switchActiveState, switchHendler, switchableElementId}) => {
        const swithStateElements = (switchStates) ? 
            Object.keys(switchStates).map((label, index) => {
                const color = switchStates[label];
                const switchStyle = {
                    color: (label == switchActiveState) ? color : '#43266e',
                    borderColor: (label == switchActiveState) ? color : '#43266e',
                    opacity: (label == switchActiveState) ? 1 : '.5',
                };
                return (
                    <li 
                        onClick={() => switchHendler(label, switchableElementId)} 
                        style={switchStyle} 
                        key={index}
                        className="multiswitch__item"
                    >
                        {label}
                    </li>
                )
            })
        :
            null
        ;
    return (
        <ul className="multiswitch">
            {swithStateElements}      
        </ul>
    )
}
export default Multiswitch;
