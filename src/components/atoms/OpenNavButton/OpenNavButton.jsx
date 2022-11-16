import React from 'react';
import './OpenNavButton.scss';

const OpenNavButton = ({ onNavButtonClick, lineColor }) => {
    return (
        <div
            className='OpenNavButton_wrapper'
            style={{
                '--color': lineColor,
            }}
            onClick={onNavButtonClick}
        >
            <button className='OpenNavButton_button'>
                <span className='OpenNavButton_topLine'></span>
                <span className='OpenNavButton_space'></span>
                <span className='OpenNavButton_botLine'></span>
            </button>
        </div>
    );
};

export default OpenNavButton;
