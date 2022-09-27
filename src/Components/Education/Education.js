import React from 'react';
import './Education.css';
import EducationContent from './EducationContent/EducationContent';
import EducationLogo from './EducationLogo/EducationLogo';

function Education() {
    return (
        <div className="education">
            <EducationLogo />
            <EducationContent />
        </div>
    )
}

export default Education