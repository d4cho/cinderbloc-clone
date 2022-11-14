import React, { useState } from 'react';
import OpenNavButton from '../../atoms/OpenNavButton/OpenNavButton';
import NavModal from '../../NavModal/NavModal';
import './AboutPage.scss';

const AboutPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className='AboutPage_wrapper'>
            <OpenNavButton
                onNavButtonClick={() => setIsNavOpen(true)}
                lineColor={'#000'}
            />

            <div className='AboutPage_grid'>
                <div className='AboutPage_grid_left'>
                    <div className='aboutUs'>
                        <div>
                            <span>CINDERBLOC</span> is an
                        </div>
                        <div>award-winning branding</div>
                        <div>+ design agency based</div>
                        <div> in Toronto. Through</div>
                        <div>integrity, commitment</div>
                        <div>and purpose; we are</div>
                        <div>more than just concepts</div>
                        <div>and ideas - we build</div>
                        <div>strategic brands.</div>
                    </div>
                    <div className='nextNavigator'>
                        <div className='nextTitle'>contact</div>
                        <div className='verticalLineContainer'>
                            <div className='verticalLine'></div>
                        </div>
                    </div>
                </div>
                <div className='AboutPage_grid_right'>
                    <div>scrollable</div>
                </div>
            </div>

            {isNavOpen && <NavModal onCloseClick={() => setIsNavOpen(false)} />}
        </div>
    );
};

export default AboutPage;
