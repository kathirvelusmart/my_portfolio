import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ProjectsList } from '../../../constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectAccordion.css';

function ProjectAccordion() {
    return (
        <div>
            <div style={{ marginTop: 30, width: '100%' }}>
                <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                    {
                        ProjectsList.map((projectDetails, index) => {
                            return (
                                <Accordion.Item key={index} eventKey={index.toString()}>
                                    <Accordion.Header>{projectDetails.projectHeader}</Accordion.Header>
                                    <Accordion.Body>
                                        <Card>
                                            <Card.Body>
                                                <h6 style={{ fontWeight: 'bold' }}>Project Description</h6>
                                                <p>
                                                    {projectDetails.projectDescription}
                                                </p>
                                                <h6 style={{ fontWeight: 'bold' }}>Project Duration - {projectDetails.projectDuration}</h6>
                                                <h6>Role - {projectDetails.role}</h6>
                                                {projectDetails.devSkillsIconsList.map((icon, index) =>
                                                (
                                                    <span style={{ marginRight: 16, fontSize: 29 }} key={index}>
                                                        <FontAwesomeIcon icon={icon.icon} className={icon.className} />
                                                    </span>
                                                )
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default ProjectAccordion