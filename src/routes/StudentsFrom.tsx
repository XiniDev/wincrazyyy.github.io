import React from 'react';

type StudentsFromProp = {
    schools: string[];
}

const StudentsFrom: React.FC<StudentsFromProp> = ({ schools }) => {

    const handleStudentsFrom = () => {
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
                        {handleStudentsFrom()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentsFrom;