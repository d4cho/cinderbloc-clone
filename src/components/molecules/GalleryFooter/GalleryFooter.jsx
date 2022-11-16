import React, { useState, useEffect } from 'react';
import { addZeroesInFront } from '../../../utils/functions';
import './GalleryFooter.scss';

const GalleryFooter = ({ currentImageIdx, totalImages }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        setTimeout(() => {
            setAnimate(true);
        }, 1000);
    }, [currentImageIdx]);

    return (
        <div className='GalleryFooter_wrapper'>
            <div
                className={`GalleryFooter_galleryPosition ${
                    animate && 'GalleryFooter_fadeIn'
                }`}
                style={{
                    '--color': `${currentImageIdx === 0 ? '#000' : '#FFF'}`,
                }}
            >
                <div>{addZeroesInFront(currentImageIdx + 1)}</div>
                {animate && (
                    <span className='GalleryFooter_lineWrapper'>
                        <div className='GalleryFooter_line'></div>
                    </span>
                )}
                <div>{addZeroesInFront(totalImages)}</div>
            </div>
        </div>
    );
};

export default GalleryFooter;
