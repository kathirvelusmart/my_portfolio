import React from 'react';
import './ExperienceContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../../../App.css';
import { ExperiencePoints } from '../../../constants/constant';
import { FontAwesomeIconList } from '../../../constants/constant';

function ExperienceContent() {

    const experienceContent = ExperiencePoints.map((experience, index) => {
        return (
            <li key={index}>{experience}</li>
        )
    })
    return (
        <div className="experienceContent">
            <h2 className="contentTitle">Experience
                <span style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faBriefcase} />
                </span>
            </h2>
            <div className="experiencePoints">
                {experienceContent}
            </div>
            <div className="skillsContent">
                {/* <h2 className="certificateTitle">
                    Technologies
                </h2> */}
                <div className='skillsList'>
                    {FontAwesomeIconList.devSkillsIconsList.map((icon, index) =>
                    (
                        <span style={{ marginRight: 16 }} key={index}>
                            <FontAwesomeIcon icon={icon.icon} className={icon.className} />
                        </span>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent