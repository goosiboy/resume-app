import './resume-grid.css';
import './resume.css';
import ContactInfoContainer from './ContactInfoContainer';
import SkillsContainer from './SkillsContainer';
import WorkExperience from './experience/WorkExperienceTable';
import WorkExperienceCell from './experience/WorkExperienceCell';
import ResumeHeader from './ResumeHeader';

const Resume = () => {

    function buildWorkExperienceCells() {
        const cells = [] as JSX.Element[];

        for (let i = 0; i < 2; i++) {
            cells.push(
                <WorkExperienceCell
                    key={i} title={"Title"}
                    company={"Company"}
                    location={"Location"}
                    startDate={"Aug 2018"}
                    endDate={"Present"}
                    description={"Increased maintainability and efficiency of a confidential-customer-data-processing service written in Java by implementing a customized XML – parsing solution based on SAX (Simple API for XML), which cut down processing times by 2 - 3 seconds per patient data query as measured by company networking team during system stress tests."} />
            );
        }

        return cells;
    }

    return (
        <div className="resume">
            <div className="resumeLeftContainer-1">
                <ResumeHeader />
            </div>
            <div className="resumeRightContainer-1">
                <ContactInfoContainer />
            </div>
            <div className="resumeLeftContainer-2">
                <SkillsContainer />
            </div>
            <div className="resumeRightContainer-2">
                <WorkExperience workExperienceCells={buildWorkExperienceCells()} />
            </div>
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