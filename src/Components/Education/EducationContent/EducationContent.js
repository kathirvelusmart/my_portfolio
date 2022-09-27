import React from 'react';
import './EducationContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { certificatesArray } from '../../../constants/constant';


function EducationContent() {
    const certificates = certificatesArray.map((certificate, index) => {
        return (
            <div key={index} style={{ marginBottom: 10 }}>
                <FontAwesomeIcon icon={faAward} />
                <span style={{ marginLeft: 10 }}>
                    {certificate}
                </span>
            </div>
        )
    }
    )
    return (
        <div className="educationContent">
            <h2>Education
                <span style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                </span>
            </h2>
            <h3>
                B.E [Computer Science Engineering...]
            </h3>
            <h4>Graduated at M.A.M College of Engineering and Technology.</h4>
            <h3>
                Certifications
            </h3>
            <div className='certificate'>
                {certificates}
            </div>
        </div >
    )
}

export default EducationContent