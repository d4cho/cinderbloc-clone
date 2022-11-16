import React from 'react';
import OpenNavButton from '../../atoms/OpenNavButton/OpenNavButton';
import './GalleryHeader.scss';

const GalleryHeader = ({ title, onNavButtonClick, currentImageIdx }) => {
    return (
        <div
            className='GalleryHeader_wrapper'
            style={{
                '--color': `${currentImageIdx === 0 ? '#000' : '#FFF'}`,
            }}
        >
            <div className='GalleryHeader_title'>{title}</div>
            <OpenNavButton
                onNavButtonClick={onNavButtonClick}
                lineColor={currentImageIdx === 0 ? '#000' : '#FFF'}
            />
        </div>
    );
};

export default GalleryHeader;
