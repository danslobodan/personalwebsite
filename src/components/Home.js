import React from 'react';

const Home = () => {
    return (
        <div className="ui container">
            <h1>Home</h1>
            <p>
                This is starting to look like an actual webpage!
            </p>
            <p>
                Look there's a navigation bar! Press buttonsss!!
            </p>
            <p>
                If you've stumbled upon this code by chance, 
                have in mind that you need to wire your own Client ID and set up
                your OAuth project on <a href="https://console.developers.google.com/">google developers console</a> page.
            </p>
        </div>
    );
};

export default Home;