import React from 'react';

import './Home.css'

function Home() {
    return (
        <main className='Home'>
            {/* <header>
                <img />
                <nav>

                </nav>
            </header> */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {/* <h1>Home Component</h1> */}
            {/* <section className='vids'> */}
                <section className='gameplay'>
                    <h2>Checkout the gameplay!</h2>
                    <span className="embed-youtube"><iframe className="youtube-player" src="https://www.youtube.com/embed/videoseries?list=PLCuDv3oRKHKsJQxDZNsqt6oXmkjV8TLHv&amp;hl=en_US" allowFullScreen={true} data-ratio="0.5625" data-width="560" data-height="315"></iframe></span>
                </section>
                <section className='vr'>
                    <h2>Checkout the VR playlist!</h2>
                    <span className="embed-youtube"><iframe className="youtube-player" src="https://www.youtube.com/embed/playlist?list=PLCuDv3oRKHKuHgYR2fk0f9NtCUGk8RJNN" allowFullScreen={true} data-ratio="0.5625" data-width="560" data-height="315"></iframe></span>
                </section>
                {/* <section className='twitch_live'>
                    <iframe src="https://player.twitch.tv/?channel=mfpallytime&parent=davidwnewman.com" frameBorder="0" allowFullScreen={true} scrolling="no"></iframe><a href="https://www.twitch.tv/wonsnot?tt_content=text_link&tt_medium=live_embed">Watch live video from Wonsnot on www.twitch.tv</a>
                </section> */}
            {/* </section> */}
        </main>
    );
}

export default Home;