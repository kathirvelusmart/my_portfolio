import React from 'react';
import './HomeContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIconList } from '../../constants/constant';

library.add(fab)

export default function HomeContent() {
    return (
        <div className="greeting-text">
            <div>
                <h1 className="name">Kathirvelu  P</h1>
                <h2 className="title-heading">
                    Designer, Frontend Developer
                </h2>
                <h5 className="firstDescription">
                    I design and code beautifully simple things, and I love what I do.
                </h5>
                <h6 className="secondDescription">
                    A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact
                </h6>
                <div className="socialMediaIcons">
                    {FontAwesomeIconList.socialMediaIconsList.map((icon, index) =>
                    (
                        <span style={{ marginRight: 16 }} key={index}>
                            <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon.icon} className={icon.className} />
                            </a>
                        </span>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
