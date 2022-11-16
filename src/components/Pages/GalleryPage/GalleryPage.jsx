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

    const { title, medias } = galleryData[galleryId];

    const handleClick = () => {
        setCurrentIdx((prevState) => {
            return (prevState + 1) % medias.length;
        });
    };

    console.log(currentIdx);

    return (
        <div className='GalleryPage_wrapper'>
            <GalleryHeader
                title={title}
                onNavButtonClick={() => setIsNavOpen(true)}
                currentImageIdx={currentIdx}
            />
            {medias.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className={`GalleryPage_content ${
                            idx === currentIdx && 'GalleryPage_content_shown'
                        }`}
                        onClick={handleClick}
                        style={{
                            '--imageUrl': `url(${medias[currentIdx]?.url})`,
                        }}
                    >
                        {item.format === 'video' && (
                            <video
                                className='GalleryPage_video'
                                loop
                                muted
                                autoPlay
                            >
                                <source src={item.url} type='video/webm' />
                            </video>
                        )}
                    </div>
                );
            })}
            <GalleryFooter
                currentImageIdx={currentIdx}
                totalImages={medias.length}
            />

            {isNavOpen && <NavModal onCloseClick={() => setIsNavOpen(false)} />}
        </div>
    );
};

export default GalleryPage;
