import React from 'react';
import './EducationCertificates.css';
import { certificateCardsList } from '../../../constants/constant';
import CardComponent from '../../../CardComponent/CardComponent'

function EducationCertificates() {
    return (
        <div className="certificateCards">
            {
                certificateCardsList.map((certificateDetails, index) => {
                    return (
                        <CardComponent key={index} cardDetails={certificateDetails} />
                    )
                })
            }
        </div>
    )
}

export default EducationCertificates