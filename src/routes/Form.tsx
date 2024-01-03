import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useForm } from './useForm';

import Cross from '../images/cross.png';
import { UserForm } from './UserForm';
import { SyllabusForm } from './SyllabusForm';
import { MiscForm } from './MiscForm';
import emailjs from '@emailjs/browser';
 
type FormProp = {
    formActive: boolean;
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
    contactMethod: string;
    countryCode: string;
    contact: string;
    firstName: string;
    lastName: string;
    schoolName: string;
    syllabus: string;
    subSyllabus: string;
    pricing: string;
    noteTaking: string;
    currResult: string;
    expResult: string;
    referral: string;
}

const INITIAL_DATA = {
    contactMethod: "",
    countryCode: "852",
    contact: "",
    firstName: "",
    lastName: "",
    schoolName: "",
    syllabus: "",
    subSyllabus: "",
    pricing: "",
    noteTaking: "",
    currResult: "",
    expResult: "",
    referral: "",
}

const Form: React.FC<FormProp> = ({ formActive, setFormActive }) => {
    useEffect(() => emailjs.init("gib2jZLcxQapdRDOq"), []);

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

    const { steps, currStepIndex, step, isFirstStep, isLastStep, back, next, reset} = useForm([
        <UserForm {...data} updateFields={updateFields} />,
        <SyllabusForm {...data} updateFields={updateFields} />,
        <MiscForm {...data} updateFields={updateFields} />,
    ]);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isLastStep) return next();

        const serviceId = "service_lx2x1nd";
        const templateId = "template_kgnn1o9";

        try {
            await emailjs.send(serviceId, templateId, {
                contactMethod: data.contactMethod,
                countryCode: data.countryCode,
                contact: data.contact,
                firstName: data.firstName,
                lastName: data.lastName,
                schoolName: data.schoolName,
                syllabus: data.syllabus,
                subSyllabus: data.subSyllabus,
                pricing: data.pricing,
                noteTaking: data.noteTaking,
                currResult: data.currResult,
                expResult: data.expResult,
                referral: data.referral,
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        };

        setData(INITIAL_DATA);
        setFormActive(false);
        reset();
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