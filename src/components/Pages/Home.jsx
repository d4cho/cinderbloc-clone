import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className='Home_wrapper'>
            <div className='Home_ciderblocTextWrapper'>
                <div className='block_section'>
                    <div className='block'>.</div>
                    <div className='text'>CINDER</div>
                </div>
                <div className='block_section'>
                    <div className='block'>.</div>
                    <div className='text'>BLOC</div>
                    <div className='line'></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
