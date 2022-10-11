import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import './ProjectContent.css';
import { ProjectIconsList } from '../../../constants/constant';

function ProjectContent() {
    return (
        <div className="projectDescription">
            <h2 className="contentTitle">Projects
                <span style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faDiagramProject} />
                </span>
            </h2>
            <h4>
                My projects makes use of vast variety of latest technology tools. My best experience is to create  web applications using Angular and React JS.
            </h4>
            <div style={{ marginTop: 20 }}>
                {
                    ProjectIconsList.map((icon, index) =>
                    (
                        <span style={{ marginRight: 16, fontSize: 35 }} key={index}>
                            <FontAwesomeIcon icon={icon.icon} className={icon.className} />
                        </span>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default ProjectContent