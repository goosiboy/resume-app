import './resume-grid.css';
import './resume.css';
import { useState } from 'react';

const Resume = () => {

    function ContactInfoContainer() {
        return (
            <div className="contactInfoContainer">
                <div className="links">
                    <p><a href="https://github.com/oinasjo">github.com/oinasjo</a></p>
                    <p><a href="https://bitbucket.org/Supersofty">bitbucket.org/Supersofty</a></p>
                    <p><a href="https://www.linkedin.com/in/jonyoinas/">linkedin.com/in/jonyoinas</a></p>
                </div>
                <div className="contactInfo">
                    <p>jonyoinas@gmail.com</p>
                    <p>(+358) 44 2000 189</p>
                </div>
            </div>
        );
    }

    function SkillsContainer() {
        return (
            <div className="skillsContainer">
                <h2 className="skillsHeader">SKILLS</h2>
                <h3 className="developmentHeader">Development</h3>
                <p className="developmentContentContainer">
                    Java, Javascript,  Maven,
                    Node & npm, git, Spring (boot),
                    Typescript, React, CI/CD - tools,
                    (Jenkins, Tekton, Bitbucket pipelines),
                    Docker, Openshift
                </p>
                <p className="developmentContentContainer">
                    Test driven development and agile working methods.
                </p>
                <p className="developmentContentContainer">
                    Used to working in large multilingual and multicultural teams.
                </p>
                <p className="developmentContentContainer">
                    Communication : Backlog facilitation · Clear communication · Leading teams · Self starter · Cooperative supporter
                </p>
            </div>
        );
    }

    return (
        <div className="resume">
            <div className="resumeLeftContainer-1">
                <h1 className="mainTitle">Jony <br /> Oinas</h1>
                <h3 className="secondTitle">Full-Stack <br /> Developer</h3>
            </div>
            <div className="resumeRightContainer-1">
                <ContactInfoContainer />
            </div>
            <div className="resumeLeftContainer-2">
                <SkillsContainer />
            </div>
            <div className="resumeRightContainer-2" />
            <div className="resumeLeftContainer-3" />
            <div className="resumeRightContainer-3" />
            <div className="resumeLeftContainer-4" />
            <div className="resumeRightContainer-4" />
            <div className="resumeLeftContainer-5" />
            <div className="resumeRightContainer-5" />
        </div>
    )
}

export default Resume;