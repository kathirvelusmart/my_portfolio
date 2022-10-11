import React from 'react'
import ProjectAccordion from './ProjectAccordion/ProjectAccordion'
import ProjectImage from './ProjectImage/ProjectImage';
import './Projects.css';
import ProjectContent from './ProjectContent/ProjectContent';

function Projects() {
    return (
        <React.Fragment>
            <div className="projectContent">
                <ProjectImage />
                <ProjectContent />
            </div>
            <div className="accordion">
                <ProjectAccordion />
            </div>
        </React.Fragment>
    )
}

export default Projects