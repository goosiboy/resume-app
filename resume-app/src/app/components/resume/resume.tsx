import './resume-grid.css';
import './resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeLeftContainer-1">
                <h1 className="mainTitle">Jony <br /> Oinas</h1>
                <h3 className="secondTitle">Full-Stack <br /> Developer</h3>
            </div>
            <div className="resumeRightContainer-1">
                <div className="contactInfoContainer">
                    <p><a href="https://github.com/oinasjo">github.com/oinasjo</a></p>
                    <p><a href="https://bitbucket.org/Supersofty">bitbucket.org/Supersofty</a></p>
                    <p><a href="https://www.linkedin.com/in/jonyoinas/">linkedin.com/in/jonyoinas</a></p>
                    <br />
                    <p>jonyoinas@gmail.com</p>
                    <p>contact (+358) 44 2000 189</p>
                </div>
            </div>
            <div className="resumeLeftContainer-2">
                <div className="skillsContainer">
                    <h2 className="skillsHeader">SKILLS</h2>
                    <br />
                    <h3>Development</h3>
                    <p>Java</p>
                </div>
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