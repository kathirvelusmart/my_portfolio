import React from 'react'
import ProjectContent from './ProjectContent/ProjectContent'
import ProjectImage from './ProjectImage/ProjectImage';
import './Projects.css';

function Projects() {
    return (
        <div className="content">
            <ProjectImage />
            <ProjectContent />
        </div>
    )
}

export default Projects