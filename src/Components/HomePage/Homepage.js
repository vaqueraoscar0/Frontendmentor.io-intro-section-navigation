import React, {useEffect, useState} from 'react';
import './homepage.css'
import profileImg from '../images/image-hero-desktop.png'
import profileMobileImg from '../images/image-hero-mobile.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import clientmaker from '../images/client-maker.svg'
import clientmeet from '../images/client-meet.svg'
import {Button} from "react-bootstrap";

function Homepage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    const handleResize = () => {
        if (window.innerWidth <= 1000) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

    return (
        <div className={'homepage'}>
            <div className={'homepage-body'}>
                <div className={'homepage-intro'}>
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch productivity soar.</p>
                    <Button variant={'dark'}>Learn More</Button>
                    <div className={'img-intro'}>
                        <img src={databiz} alt={'data-icon'}/>
                        <img src={audiophile} alt={'audio-icon'}/>
                        <img src={clientmaker} alt={'client-icon'}/>
                        <img src={clientmeet} alt={'meet-icon'}/>
                    </div>
                </div>
                <div className={'homepage-profile-pic'}>
                    <img src={isMobile? profileMobileImg : profileImg} alt={'profile-icon'}/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;