import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

function ProjectContent() {
    return (
        <div>
            <h2 className="contentTitle">Projects
                <span style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faDiagramProject} />
                </span>
            </h2>
            <div style={{ marginTop: 30, width: 700 }}>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Brunei Stock Exchange[BNX]</Accordion.Header>
                        <Accordion.Body>
                            Brunei Stock Exchange (BNX) offers state-of-the-art trading technology and online electronic brokerage services to active individual and institutional traders in Brunei. This innovative trading and analysis platform provides one-click access to all major Brunei stocks. Brunei Stock Exchange is a fully customizable market monitoring, charting, and analysis tool that help clients to identify and act instantly on trading opportunities.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Digitial Examination [DEX]</Accordion.Header>
                        <Accordion.Body>
                            DEX-Scalability offers an high-end exam engine portal with enabled security and advanced features and Design.
                            The DEX project is a responsive dynamic scalable application. It has multiple micro-services supporting two web accessible applications. The application has a solution that is capable of connecting with postgres database and executing complex queries and transfer the data to the web application via REST API.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default ProjectContent