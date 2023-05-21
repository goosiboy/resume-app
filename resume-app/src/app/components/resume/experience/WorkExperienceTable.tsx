import WorkExperienceCell from "./WorkExperienceCell";

interface WorkExperienceTableProps {
    workExperienceCells: JSX.Element[];
}

export default function WorkExperienceTable(props: WorkExperienceTableProps) {
    return (
        <div className="workExperienceTable">
            <h2 className="workExperienceHeader">INDUSTRY WORK EXPERIENCE</h2>
            <br />
            {props.workExperienceCells}
        </div>
    );
}