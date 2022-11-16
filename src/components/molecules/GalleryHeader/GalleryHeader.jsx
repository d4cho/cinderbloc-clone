import React from 'react';
import OpenNavButton from '../../atoms/OpenNavButton/OpenNavButton';
import './GalleryHeader.scss';

const GalleryHeader = ({ title, onNavButtonClick, currentImage }) => {
    return (
        <div
            className='GalleryHeader_wrapper'
            style={{
                '--color': `${currentImage > 1 ? '#FFF' : '#000'}`,
            }}
        >
            <div className='GalleryHeader_title'>{title}</div>
            <OpenNavButton
                onNavButtonClick={onNavButtonClick}
                lineColor={currentImage > 1 ? '#FFF' : '#000'}
            />
        </div>
    );
};

export default GalleryHeader;
