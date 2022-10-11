import React from 'react';
import './HomeContent.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SocialMediaComponent from '../../SocialMediaComponent/SocialMediaComponent';

library.add(fab)

export default function HomeContent() {
    return (
        <div className="greeting-text">
            <div>
                <h1 className="name">Hey there! I' m Kathir...</h1>
                <h2 className="title-heading">
                    Designer, Frontend Developer
                </h2>
                <h5 className="firstDescription">
                    I design and code beautifully simple things, and I love what I do.
                </h5>
                <h6 className="secondDescription">
                    A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact
                </h6>
                <SocialMediaComponent />
            </div>
        </div>
    )
}
