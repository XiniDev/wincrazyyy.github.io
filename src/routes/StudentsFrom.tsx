import React from 'react';

const StudentsFrom: React.FC = () => {
    const schools: string[] = [
        "Yew Chung International School",
        "Diocesan Boys' School",
        "St. Paul's Co-educational College",
        "Li Po Chun United World College",
        "Po Leung Kuk Choi Kai Yau School",
        "St. Stephen's College",
        "German Swiss International School",
        "The Independent Schools Foundation Academy",
        "Victoria Shanghai Academy",
        "ESF King George V School",
        "ESF Sha Tin College",
        "ESF Island School",
        "ESF West Island School",
        "ESF Discovery College",
        "Chinese International School",
        "Canadian International School of Hong Kong",
        "Singapore International School (Hong Kong)",
        "French International School of Hong Kong",
        "Australian International School Hong Kong",
        "Harrow International School Hong Kong",
        "American School Hong Kong",
        "Kiangsu-Chekiang College International Section",
    ];

    const handleStudentsFrom = (schools: string[]) => {
        const htmlSchools = [];
        for (let i = 0; i < schools.length; i++) {
            htmlSchools.push(
                <li>{schools[i]}</li>
            );
        }
        return htmlSchools;
    };

    return (
        <div className="up-down">
            <div className="up-down-container">
                <div className="up-down-title">
                    Students From
                </div>
                <div className="up-down-textdiv">
                    <ul className="students-from">
                        {handleStudentsFrom(schools)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentsFrom;