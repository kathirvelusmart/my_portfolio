import React from 'react';
import './Education.css';
import EducationCertificates from './EducationCertificates/EducationCertificates';
import EducationContent from './EducationContent/EducationContent';
import EducationLogo from './EducationLogo/EducationLogo';

function Education() {
    return (
        <div>
            <div className="education">
                <EducationLogo />
                <EducationContent />
            </div>
            <div>
                <EducationCertificates />
            </div>
        </div>
    )
}

export default Education