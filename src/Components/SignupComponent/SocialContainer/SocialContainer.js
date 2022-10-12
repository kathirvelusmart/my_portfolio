import React from 'react';
import { FontAwesomeIconList } from '../../../constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialContainer.css';

function SocialContainer() {
    return (
        <div className="social-container">
            {FontAwesomeIconList.signupIcons.map((icon, index) =>
            (
                <span style={{ marginRight: 16 }} key={index}>
                    <a href={icon.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon.icon} className={icon.className} />
                    </a>
                </span>
            )
            )}
        </div>
    )
}

export default SocialContainer