import React, { useState, useEffect } from 'react';
import OpenNavButton from '../../atoms/OpenNavButton/OpenNavButton';
import NavModal from '../../NavModal/NavModal';
import './AboutPage.scss';

const ABOUT_TEXTS = [
    <>
        <span className='AboutPage_bold_text'>CINDERBLOC</span> is an
    </>,
    'award-winning branding',
    '+ design agency based',
    'in Toronto. Through',
    'integrity, commitment',
    'and purpose; we are',
    'more than just concepts',
    'and ideas - we build',
    'strategic brands.',
];

const FOUNDER_TEXTS = [
    <>
        <span className='AboutPage_bold_text'>Ryan Di Leo</span>
    </>,
    'Founder',
    'Creative Director',
    <div className='AboutPage_underline'>
        <div>ryan@cinderbloc.com</div>
    </div>,
    ' ',
    <>
        <span className='AboutPage_bold_text'>Sandra Di Leo</span>
    </>,
    'Partner',
    'Creative Director',
    <div className='AboutPage_underline'>
        <div>sandra.d@cinderbloc.com</div>
    </div>,
];

const PHONE_ADDRESS = [
    'T - 1 416 777 BLOC',
    <div className='AboutPage_underline'>
        <div>info@cinderbloc.com</div>
    </div>,
    ' ',
    '192 Spadina Ave',
    'Suite 111',
    'Toronto ON',
    'M5T 2C2',
];

const AWARDS = [
    'Applied Arts',
    'Awwwards',
    'BILD',
    'Communication Arts',
    'CSS',
    'Graphics',
    'HOW',
    'IdN',
    'Mindsparkle',
    'NUARs',
    'OHBA',
    'RGD',
    'Rockport',
    'Siteinspire',
    'uVu',
];

const AboutPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    // 0 = about, 1 = contact, 2 = phone/address
    const [section, setSection] = useState(0);
    const [startAnim, setStartAnim] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e) => {
        if (cursorPosition.y) {
            document
                .getElementById('AboutPage_scrollable_div')
                .scrollBy(0, (e.clientY - cursorPosition.y) * 1.5);
        }
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setStartAnim(true);
        }, 500);
    }, [section]);

    const renderNavigator = () => {
        switch (section) {
            case 0:
                return 'contact';

            case 1:
                return 'telephone - address';

            case 2:
                return 'about';

            default:
                return;
        }
    };

    const handleNavigatorClick = () => {
        setSection((prevState) => {
            return (prevState + 1) % 3;
        });
    };

    return (
        <div
            className='AboutPage_wrapper'
            onMouseMove={(e) => handleMouseMove(e)}
        >
            <OpenNavButton
                onNavButtonClick={() => setIsNavOpen(true)}
                lineColor={'#000'}
            />

            <div className='AboutPage_grid'>
                <div className='AboutPage_grid_left'>
                    <div className='AboutPage_aboutUs'>
                        <div
                            className={`AboutPage_AboutPage_textSection ${
                                section === 0 && 'AboutPage_AboutPage_onTop'
                            }`}
                        >
                            {ABOUT_TEXTS.map((el, idx) => {
                                return (
                                    <div
                                        className={`AboutPage_textContainer`}
                                        key={idx}
                                    >
                                        <div
                                            className={`AboutPage_initialTextPosition ${
                                                section === 0 &&
                                                startAnim &&
                                                'AboutPage_textFromBottom'
                                            } ${
                                                section !== 0 &&
                                                'AboutPage_textHidden'
                                            }`}
                                            style={{
                                                '--animDelay': `${idx * 0.1}s`,
                                            }}
                                        >
                                            {el}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            className={`AboutPage_textSection ${
                                section === 1 && 'AboutPage_onTop'
                            }`}
                        >
                            {FOUNDER_TEXTS.map((el, idx) => {
                                return (
                                    <div
                                        className='AboutPage_textContainer'
                                        key={idx}
                                    >
                                        <div
                                            className={`AboutPage_initialTextPosition ${
                                                section === 1 &&
                                                startAnim &&
                                                'AboutPage_textFromBottom'
                                            } ${
                                                section !== 1 &&
                                                'AboutPage_textHidden'
                                            }`}
                                            style={{
                                                '--animDelay': `${idx * 0.1}s`,
                                            }}
                                        >
                                            {el}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            className={`AboutPage_textSection ${
                                section === 2 && 'AboutPage_onTop'
                            }`}
                        >
                            {PHONE_ADDRESS.map((el, idx) => {
                                return (
                                    <div
                                        className='AboutPage_textContainer'
                                        key={idx}
                                    >
                                        <div
                                            className={`AboutPage_initialTextPosition ${
                                                section === 2 &&
                                                startAnim &&
                                                'AboutPage_textFromBottom'
                                            } ${
                                                section !== 2 &&
                                                'AboutPage_textHidden'
                                            }`}
                                            style={{
                                                '--animDelay': `${idx * 0.1}s`,
                                            }}
                                        >
                                            {el}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* navigator starts */}
                    <div
                        className={`AboutPage_nextNavigator ${
                            startAnim && 'AboutPage_fadeIn'
                        }`}
                    >
                        {section === 2 && (
                            <div className='AboutPage_insta_face_twit'>
                                <div className='AboutPage_underline'>
                                    <div>instagram</div>
                                </div>
                                <div className='AboutPage_underline'>
                                    <div>facebook</div>
                                </div>
                                <div className='AboutPage_underline'>
                                    <div>twitter</div>
                                </div>
                            </div>
                        )}
                        <div
                            className='AboutPage_nextTitle'
                            onClick={handleNavigatorClick}
                        >
                            {renderNavigator()}
                        </div>
                        <div className='AboutPage_verticalLineContainer'>
                            <div className='AboutPage_verticalLine'></div>
                        </div>
                    </div>
                    {/* navigator ends */}
                </div>

                <div
                    className={`AboutPage_grid_right ${
                        section === 0 &&
                        startAnim &&
                        'AboutPage_scrollableFadeIn'
                    }`}
                    id='AboutPage_scrollable_div'
                >
                    <div className='AboutPage_awardHeading'>Awards</div>
                    <div className='AboutPage_scrollableDivider'></div>
                    {AWARDS.map((award, idx) => {
                        return (
                            <div key={idx} className='AboutPage_awardsWrapper'>
                                <div
                                    className={`AboutPage_awards_title ${
                                        startAnim &&
                                        'AboutPage_awards_title_show'
                                    }`}
                                >
                                    {award}
                                </div>
                                <div className='AboutPage_scrollableDivider'></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {isNavOpen && <NavModal onCloseClick={() => setIsNavOpen(false)} />}
        </div>
    );
};

export default AboutPage;
