import "./WorkExperienceCell.css";

interface WorkExperienceCellProps {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

export default function WorkExperienceCell(props: WorkExperienceCellProps) {

    return (
        <div className="workExperienceCell">
            <div className="title">
                {props.title}
            </div>
            <div className="company">
                {props.company}
            </div>
            <div className="location">
                {props.location}
            </div>

            {props.startDate}
            {props.endDate}
            {props.description}
        </div>
    );
}