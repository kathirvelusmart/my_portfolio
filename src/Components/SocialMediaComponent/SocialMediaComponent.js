import React from 'react';
import { FontAwesomeIconList } from '../../constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMediaComponent.css';

function SocialMediaComponent() {
    return (
        <div>
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
    )
}

export default SocialMediaComponent