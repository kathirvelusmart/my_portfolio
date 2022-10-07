import React from 'react';
import ExperienceImage from './ExperienceImage/ExperienceImage';
import ExperienceContent from './ExperienceContent/ExperienceContent';
import './Experience.css'

function Experience() {
    return (
        <div className="content">
            <div>
                <ExperienceContent />
            </div>
            <div>
                <ExperienceImage />
            </div>
        </div>
    )
}

export default Experience