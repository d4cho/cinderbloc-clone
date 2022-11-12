import React, { useState, useEffect } from 'react';
import { cinderSvg } from '../../assets/svg/svg';
import { getWidth, useMousePosition } from '../../utils/functions';
import { navData } from '../../assets/data/mediaData';
import { useNavigate, useParams } from 'react-router-dom';
import './NavModal.scss';

const NAV_ITEMS = [
    'home',
    'about - contact',
    '10 prince arthur',
    '36 birch',
    'kirkor',
    'valera',
    'boss.',
    'sher club',
    'alter',
    'form',
    'x-arch',
    'tridel',
    "l'unita",
];

const NavModal = ({ onCloseClick }) => {
    const navigate = useNavigate();
    let { galleryId } = useParams();

    const [maxViewWidth, setMaxViewWidth] = useState(getWidth());
    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        setMaxViewWidth(getWidth());
    }, []);

    const handleMouseMove = (e) => {
        if (cursorPosition.y) {
            document
                .getElementById('scrollable_div')
                .scrollBy(0, e.clientY - cursorPosition.y);
        }
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleItemClick = (item) => {
        let endPoint = item.split(' ').join('-');

        if (item === 'home') {
            navigate('/');
        } else if (endPoint === galleryId) {
            window.location.reload();
        } else {
            navigate(`/${endPoint}`);
        }
    };

    return (
        <div className='NavModal_wrapper'>
            <div
                id='scrollable_div'
                className='NavModal_container'
                onMouseMove={(e) => handleMouseMove(e)}
            >
                <button className='NavModal_close' onClick={onCloseClick}>
                    {cinderSvg}
                </button>
                <div className='NavModal_items'>
                    {NAV_ITEMS.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`NavModal_item ${
                                    idx === 0 || idx === 1
                                        ? 'color-home-about'
                                        : 'color-others'
                                } `}
                                style={{
                                    '--maxViewWidth': `${
                                        maxViewWidth - 86 - 100 - 36
                                    }px`,
                                }}
                                onClick={() => handleItemClick(item)}
                            >
                                <div className='NavModal_outline' />
                                <div style={{ zIndex: 1 }}>{item}</div>
                                <div className='NavModal_outline' />

                                <div
                                    className={`NavModal_image ${
                                        navData?.[idx - 2]?.orientation
                                    }`}
                                    style={{
                                        left: `${cursorPosition.x}px`,
                                        '--imageUrl': `url(${
                                            navData?.[idx - 2]?.imgUrl
                                        })`,
                                    }}
                                >
                                    {idx === 8 && (
                                        <video loop muted autoPlay>
                                            <source
                                                src={navData?.[idx - 2]?.imgUrl}
                                                type='video/webm'
                                            />
                                        </video>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavModal;
