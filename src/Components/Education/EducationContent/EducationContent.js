import React from 'react';
import './EducationContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { certificatesArray } from '../../../constants/constant';


function EducationContent() {
    const certificates = certificatesArray.map((certificate) => {
        return (
            <div>
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
            <h1>Education</h1>
            <h2>
                B.E [Computer Science Engineering...]
            </h2>
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