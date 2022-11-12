import React, { useState, useEffect } from 'react';
import { addZeroesInFront } from '../../utils/functions';
import './GalleryFooter.scss';

const GalleryFooter = ({ currentImage, totalImages }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        setTimeout(() => {
            setAnimate(true);
        }, 1000);
    }, [currentImage]);

    console.log(animate);

    return (
        <div className='GalleryFooter_wrapper'>
            <div
                className={`GalleryFooter_galleryPosition ${
                    animate && 'animate'
                }`}
                style={{
                    '--color': `${currentImage > 1 ? '#FFF' : '#000'}`,
                }}
            >
                <div>{addZeroesInFront(currentImage)}</div>
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
