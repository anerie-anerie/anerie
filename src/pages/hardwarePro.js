import React from "react";
import { useNavigate } from "react-router-dom";
import "./hardwarePro.css";
import auri from "../img/auri.png"
import robot from "../img/robot.jpg";
import drum from "../img/drum.png";


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
                <section className="projectSection">
                    <div className="projectImage">
                        <img src={robot} alt="FRC Robot" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">FIRST Robotics Competition Robot</h2>
                        <h4 className="projectDate">FRC • 2026</h4>
                        
                        <p className="projectDescription">
                        This is a robot that can drive around the field wirelessly and score dogeballs into a funnel autonomosuly and with user control. This was the objective of the compeition game for FIRST Robotics Competition 2026. I mainly worked on the software and electrical aspects.
                        </p>

                        <div className="skills">
                            <span className="skill">Java</span>
                            <span className="skill">Command-based programming</span>
                            <span className="skill">Electrical Wiring</span>
                        </div>

                        <div className="projectButtons">
                            <a href="https://github.com/Spark-Youth-Robotics-Club-8729/2026-dcmp-code" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://www.youtube.com/watch?v=ckRo2TKa48k" target="_blank" rel="noopener noreferrer" className="projectLink">Demo</a>
                        </div>
                    </div>
                </section>

                <section className="projectSection">
                    <div className="projectImage">
                    <img src={drum} alt="drumstick" />
                    </div>

                    <div className="projectInfo">
                        <h2 className="projectTitle">Virtual Drumstick</h2>
                        <h4 className="projectDate">Research Project • 2026</h4>
                        
                        <p className="projectDescription">
                        This is a virtual drumstick for those with minimal mobility to enjoy the physical sensation of playing drums without the need for a real kit.
                        </p>

                        <div className="skills">
                            <span className="skill">Arduino BLE Sense REV 2</span>
                            <span className="skill">IMU</span>
                        </div>

                        <div className="projectButtons">
                            <a href="https://github.com/anerie-anerie/virtual-drumstick" target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                            <a href="https://drive.google.com/file/d/13G0y3Wc8oZ-jtKFvViRUcWXxtqEsk7CJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="projectLink">Demo</a>
                        </div>
                    </div>
                </section>



        <button className="button" onClick={() => navigate('/')}></button>
        </div>
    </div>
    )


}

export default HWProjects;