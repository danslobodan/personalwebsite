import React from 'react';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <img className="ui medium circular image" src="CV2.jpg" alt="CV picture" />
                </div>
                <div className="column eight wide">
                    <div className="ui content">
                        <h3>Slobodan Dan</h3>
                        <div className="ui divider"></div>
                        <p>Hi I'm Slobodan. I'm a full-stack developer. Welcome to my website.</p>
                        <div className="ui divider"></div>
                        <p>This is a work in progress but it's a lot of fun building stuff from scratch.</p>
                        <div className="ui divider"></div>
                        <p>Have a wonderful day!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;