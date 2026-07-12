import React, { useState } from 'react';
import Overlay from './OverlayPro'; // Import your same Overlay component
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
            <div className="title"></div>

            {/* This row container holds your 3 individual interactive items */}

                <div 
                    className="laptop" 
                    onClick={showProjects(
                        <div className="projectContainer">
                            <div className="project">
                            <h2 className="projectTitle">Meme the Dream</h2>
                    <p className="projectDescription">
                        We created Meme the Dream at JPEG Hackathon. This browser game allows players to match meme poses using their webcam. You play as Kyle, a student battling raccoons with meme poses.
                    </p>
                    <div className="skills">
                        <span className="skill">Flask API</span>
                        <span className="skill">OpenCV</span>
                        <span className="skill">MediaPipe</span>
                    </div>
                    <div className="projectButtons">
    <a
        href="https://meme-the-dream.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        Check it out!
    </a>

    <a
        href="https://github.com/Tishya-2008/meme-the-dream"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        GitHub
    </a>

    <a
        href="https://drive.google.com/file/d/1diemL9OKKtZWgEdZkg_nvgbT1LrBg9wd/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        Video Demo
    </a>
    <p>
    ⭐ Judge's Award at 2025 JPEG Ottawa Hackathon
    </p>
</div>

                            </div>
                            <div className="project">
    <h2 className="projectTitle">Lunarhacks</h2>

    <p className="projectDescription">
        We designed and coded the Lunarhacks website. Lunarhacks is a local organization that runs events to promote all youth in STEM! We utilized the React framework and Figma design to create an adaptive site for all to use.
    </p>

    <div className="skills">
        <span className="skill">React</span>
        <span className="skill">JavaScript</span>
        <span className="skill">CSS</span>
    </div>

    <div className="projectButtons">
        <a
            href="https://lunarhacks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
        >
            Check it out!
        </a>

        <a
            href="https://github.com/lunarhacks-org/lh-org"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
        >
            GitHub
        </a>

        <a
            href="https://drive.google.com/file/d/1laugOCgaG-bUZGQAGzyYhkjfgDd0P61r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
        >
            Video Demo
        </a>
    </div>
</div>
                            
                            <div className="project">
                            <h2 className="projectTitle">Iron Will</h2>

<p className="projectDescription">
Iron Will combines advanced image recognition with a user-friendly chatbot for accessible anemia detection. Users upload pictures of their nails, eyes, or palms, and our system delivers feedback with chats.
</p>

<div className="skills">
    <span className="skill">Tensorflow</span>
    <span className="skill">Stremlit</span>
    <span className="skill">React</span>
</div>

<div className="projectButtons">
    <a
        href="https://devpost.com/software/iron-will"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        Devpost
    </a>

    <a
        href="https://github.com/anerie-anerie/Technova-2024/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        GitHub
    </a>

    <a
        href="https://drive.google.com/drive/folders/108y6WmSTJVq1HXnoQtiJ9OkVKDdl3V3E?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="projectLink"
    >
        Video Demo
    </a>
    <p>
    ⭐ Best Overall at 2024 Technova Hackathon
    </p>
</div>

                            </div>
                            
             
                        </div>
                    )} 
                    style={{ cursor: 'pointer' }}
                ></div>

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