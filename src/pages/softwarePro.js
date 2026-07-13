import React from "react";
import { useNavigate } from "react-router-dom";
import "./softwarePro.css";

import memeDream from "../img/memeDream.png";
import lunarhacks from "../img/lunarhacks.png";
import ironWill from "../img/ironWill.png";
import beeBeat from "../img/bee_beat.png";

function SWProjects() {
    const navigate = useNavigate();

    return (
        <div className="projectBg_sw">
            <div className="projectsPage">


                <div className="pageHeaderImage" role="img" aria-label="Software Projects"></div>


                <section className="projectSection">
                    <div className="projectImage">
                        <img src={beeBeat} alt="Bee the Beat" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Bee the Beat</h2>
                        <h4 className="projectDate">Hack the North • 2025</h4>
                        
                        <p className="projectDescription">
                        Bee the Beat transforms simple hand movements into music and visuals. 
                        This website tracks your hands in real time and maps 
                        each finger movement allowing you 
                        to “play” music in mid-air like a virtual instrument.
                        </p>

                        <div className="skills">
                            <span className="skill">Flask API</span>
                            <span className="skill">Sounddevice</span>
                            <span className="skill">AWS</span>
                        </div>

                        <div className="projectButtons">
                            <a href="https://devpost.com/software/bee-the-beat" target="_blank" rel="noopener noreferrer" className="projectLink">Devpost</a>
                            <a href="https://github.com/anerie-anerie/HTN/tree/main/htn-project" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://www.youtube.com/watch?v=wBgmhkaI8tQ" target="_blank" rel="noopener noreferrer" className="projectLink">Video</a>
                        </div>
                    </div>
                </section>

                {/* Project 1 */}
                <section className="projectSection">
                    <div className="projectImage">
                        <img src={memeDream} alt="Meme the Dream" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Meme the Dream</h2>
                        <h4 className="projectDate">JPEG Ottawa Hackathon • 2025</h4>
                        
                        <p className="projectDescription">
                            We created Meme the Dream at JPEG Hackathon.
                            This browser game allows players to battle
                            raccoons by matching meme poses using their webcam.
                        </p>

                        <div className="skills">
                            <span className="skill">Flask API</span>
                            <span className="skill">OpenCV</span>
                            <span className="skill">MediaPipe</span>
                        </div>

                        <p className="award">
                            ⭐ Judge's Award at JPEG Ottawa Hackathon
                        </p>

                        <div className="projectButtons">
                            <a href="https://meme-the-dream.onrender.com/" target="_blank" rel="noopener noreferrer" className="projectLink">Live Demo</a>
                            <a href="https://github.com/Tishya-2008/meme-the-dream" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://drive.google.com/file/d/1diemL9OKKtZWgEdZkg_nvgbT1LrBg9wd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="projectLink">Video</a>
                        </div>
                    </div>
                </section>



                {/* Project 2 */}
                <section className="projectSection">
                    <div className="projectImage">
                        <img src={lunarhacks} alt="Lunarhacks" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Lunarhacks</h2>
                        <h4 className="projectDate">Organization Website</h4>
                        
                        <p className="projectDescription">
                            Designed and developed the Lunarhacks website
                            using React. The site promotes STEM events for
                            youth and adapts beautifully across devices.
                        </p>

                        <div className="skills">
                            <span className="skill">React</span>
                            <span className="skill">JavaScript</span>
                            <span className="skill">CSS</span>
                        </div>

                        <div className="projectButtons">
                            <a href="https://lunarhacks.com/" target="_blank" rel="noopener noreferrer" className="projectLink">Website</a>
                            <a href="https://github.com/lunarhacks-org/lh-org" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://drive.google.com/file/d/1laugOCgaG-bUZGQAGzyYhkjfgDd0P61r/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="projectLink">Video</a>
                        </div>
                    </div>
                </section>

                {/* Project 3 */}
                <section className="projectSection">
                    <div className="projectImage">
                        <img src={ironWill} alt="Iron Will" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Iron Will</h2>
                        <h4 className="projectDate">UWaterloo Technova • 2024</h4>
                        
                        <p className="projectDescription">
                            Iron Will combines image recognition and a
                            conversational AI assistant to provide accessible
                            anemia detection from photos of nails, eyes,
                            or palms.
                        </p>

                        <div className="skills">
                            <span className="skill">TensorFlow</span>
                            <span className="skill">Streamlit</span>
                            <span className="skill">React</span>
                        </div>

                        <p className="award">
                            ⭐ Best Overall at Technova 2024
                        </p>

                        <div className="projectButtons">
                            <a href="https://devpost.com/software/iron-will" target="_blank" rel="noopener noreferrer" className="projectLink">Devpost</a>
                            <a href="https://github.com/anerie-anerie/Technova-2024/tree/main" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://drive.google.com/drive/folders/108y6WmSTJVq1HXnoQtiJ9OkVKDdl3V3E?usp=sharing" target="_blank" rel="noopener noreferrer" className="projectLink">Video</a>
                        </div>
                    </div>
                </section>

                <button className="button" onClick={() => navigate('/')}></button>

            </div>
        </div>
    );
}

export default SWProjects;