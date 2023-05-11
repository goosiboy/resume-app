import './resume-grid.css';
import './resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeLeftContainer-1">
                <h1 className="mainTitle">Jony <br /> Oinas</h1>
                <h2 className="secondTitle">Full-Stack <br /> Developer</h2>
            </div>
            <div className="resumeRightContainer-1">
                <div className="links">
                    <p>github.com/oinasjo</p>
                    <p>bitbucket.org/Supersofty</p>
                    <p>linkedin.com/in/jonyoinas</p>
                </div>
            </div>
            <div className="resumeLeftContainer-2" />
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