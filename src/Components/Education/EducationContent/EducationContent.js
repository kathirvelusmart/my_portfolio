import React from 'react';
import './EducationContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { certificatesArray } from '../../../constants/constant';
import '../../../App.css';

function EducationContent() {
    const certificates = certificatesArray.map((certificate, index) => {
        return (
            <div key={index} style={{ marginBottom: 10 }}>
                <FontAwesomeIcon icon={faAward} className="faAward" />
                <span style={{ marginLeft: 10 }}>
                    {certificate}
                </span>
            </div>
        )
    }
    )
    return (
        <div className="educationContent">
            <h2 className="contentTitle">Education
                <span style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                </span>
            </h2>
            <h3>
                B.E [Computer Science Engineering...]
            </h3>
            <h4>Graduated at M.A.M College of Engineering and Technology.</h4>
            <h3 className="certificateTitle">
                Certifications
            </h3>
            <div className='certificate'>
                {certificates}
            </div>
        </div >
    )
}

export default EducationContent