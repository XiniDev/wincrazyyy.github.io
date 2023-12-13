import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useForm } from './useForm';

import Cross from '../images/cross.png';
import { UserForm } from './UserForm';
import { SyllabusForm } from './SyllabusForm';
import { MiscForm } from './MiscForm';
 
type FormProp = {
    formActive: boolean;
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
    phoneNo: string;
    firstName: string;
    lastName: string;
    schoolName: string;
    syllabus: string;
}

const INITIAL_DATA = {
    phoneNo: "",
    firstName: "",
    lastName: "",
    schoolName: "",
    syllabus: "ibdp",
}

const Form: React.FC<FormProp> = ({ formActive, setFormActive }) => {
    const closeForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(false);
    };

    const [data, setData] = useState(INITIAL_DATA);

    const updateFields = (fields: Partial<FormData>) => {
        setData(prev => {
            return {...prev, ...fields }
        });
    }

    const { steps, currStepIndex, step, isFirstStep, isLastStep, back, next} = useForm([
        <UserForm {...data} updateFields={updateFields} />,
        <SyllabusForm {...data} updateFields={updateFields} />,
        <MiscForm {...data} updateFields={updateFields} />,
    ]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!isLastStep) return next();
        alert("success");
    };

    return (
        <div className={`form ${formActive ? 'active' : ''}`}>
            <div className="form-background"></div>
            <div className="form-container">
                <div
                    className="form-close-button"
                    onClick={(e) => closeForm(e)}
                >
                    <img src={Cross}/>
                </div>
                {/* <div className="form-title">
                    Book a Lesson Now!
                </div> */}
                <form onSubmit={(e) => onSubmit(e)}> 
                    <div className="form-details-container">
                        <div className="form-counter">
                            { currStepIndex + 1 } / { steps.length }
                        </div>
                        <div>
                            { step }
                        </div>
                    </div>
                    <div className="form-step-buttons">
                        {!isFirstStep && (
                            <button
                                className="form-step-back"
                                type="button"
                                onClick={back}
                            >
                                    Back
                            </button>
                        )}
                        <button
                            className="form-step-next"
                            type="submit"
                        >
                            {isLastStep ? "Finish" : "Next"}
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default Form;