import React, { useState } from 'react';
import Overlay from '../components/OverlayPro'; // Import your same Overlay component
import { useNavigate } from 'react-router-dom';
import './projects.css';

function Projects() {
    const navigate = useNavigate();
    const [overlayContent, setOverlayContent] = useState(null);

    // Helper to open the overlay with specific JSX content
    const showProjects = (content) => () => setOverlayContent(content);
    const closeOverlay = () => setOverlayContent(null);

    return (
        <div className="projectBg">

                <div className="laptop" onClick={() => navigate("/software-projects")}>
                </div>

                <a href="https://drive.google.com/file/d/1vn3sTHnuFMbJABlDF88QJmKlx9PQ250e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <div className="art"></div>
                </a>

                <div
                    className="breadboard"
                    onClick={showProjects(
                        <div className="comingSoon">
                            Projects coming soon!
                        </div>
                    )}
                ></div>


            <button className="button" onClick={() => navigate('/')}></button>

            <Overlay text={overlayContent} onClose={closeOverlay} />
        </div>
    );
}

export default Projects;