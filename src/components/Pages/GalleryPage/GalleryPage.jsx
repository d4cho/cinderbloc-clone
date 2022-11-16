import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavModal from '../../NavModal/NavModal';
import GalleryHeader from '../../molecules/GalleryHeader/GalleryHeader';
import GalleryFooter from '../../molecules/GalleryFooter/GalleryFooter';
import { galleryData } from '../../../assets/data/GalleryData';
import './GalleryPage.scss';

const GalleryPage = () => {
    let { galleryId } = useParams();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const { title, images, video } = galleryData[galleryId];

    const handleClick = () => {
        setCurrentIdx((prevState) => {
            return (prevState + 1) % (images.length + 1);
        });
    };

    return (
        <div className='GalleryPage_wrapper'>
            <GalleryHeader
                title={title}
                onNavButtonClick={() => setIsNavOpen(true)}
                currentImage={currentIdx + 1}
            />
            {images.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className={`GalleryPage_content ${
                            (idx === currentIdx - 1 || currentIdx === 0) &&
                            'GalleryPage_content_shown'
                        }`}
                        onClick={handleClick}
                        style={{
                            '--imageUrl': `url(${images[currentIdx - 1]})`,
                        }}
                    >
                        {currentIdx === 0 && (
                            <video
                                className='GalleryPage_video'
                                loop
                                muted
                                autoPlay
                            >
                                <source src={video} type='video/webm' />
                            </video>
                        )}
                    </div>
                );
            })}
            <GalleryFooter
                currentImage={currentIdx + 1}
                totalImages={images.length + 1}
            />

            {isNavOpen && <NavModal onCloseClick={() => setIsNavOpen(false)} />}
        </div>
    );
};

export default GalleryPage;
