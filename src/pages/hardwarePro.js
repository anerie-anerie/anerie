import React from "react";
import { useNavigate } from "react-router-dom";
import "./hardwarePro.css";
import auri from "../img/auri.png"


function HWProjects() {
    const navigate = useNavigate();
    return (
    <div className="projectBg_sw">

        <div className="projectsPage">

        <div className="pageHeaderImage" role="img" aria-label="Hardware Projects"></div>

        <section className="projectSection">
                    <div className="projectImage">
                        <img src={auri} alt="Auri" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Auri</h2>
                        <h4 className="projectDate">Hack the 6ix • 2026</h4>
                        
                        <p className="projectDescription">
                        Auri is an AI-powered wearable wristband that listens for important environmental sounds and notifies the wearer using distinct vibration patterns and visual indicators.
                        </p>

                        <div className="skills">
                            <span className="skill">Arduino UNO Q</span>
                            <span className="skill">Edge Impulse</span>
                            <span className="skill">Gemini API</span>
                        </div>

                        <div className="projectButtons">
                            <a href="https://devpost.com/software/auri-gvp74e" target="_blank" rel="noopener noreferrer" className="projectLink">Devpost</a>
                            <a href="https://github.com/lindaeq/auri" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://www.youtube.com/watch?v=50oRJGpmNhI" target="_blank" rel="noopener noreferrer" className="projectLink">Video</a>
                        </div>
                    </div>
                </section>


        <button className="button" onClick={() => navigate('/')}></button>
        </div>
    </div>
    )


}

export default HWProjects;