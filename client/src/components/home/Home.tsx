import React from 'react';

const Home: React.FC = () => {
    const videoSrc = `https://www.youtube.com/embed/4-079YIasck`;

    return (
        <div>
            <p>
                As Master Shi Heng Yi teaches, all of us must find our own path.
                Besides avoiding the five hindrances, to keep on my path I have
                described five qualities that a true architect outh to have.
            </p>
            <hr />
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                    className='embed-responsive-item'
                    width='560'
                    height='315'
                    src={videoSrc}
                    title='Five Hindrances'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
