import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useForm } from './useForm';

import Cross from '../images/cross.png';
import { UserForm, UserFormDataType } from './UserForm';
import { SyllabusForm, SyllabusFormDataType } from './SyllabusForm';
import { MiscForm, MiscFormDataType } from './MiscForm';
import emailjs from '@emailjs/browser';

import pricingData from '../json/pricingData.json';

type FormType = {
    userForm: UserFormDataType;
    syllabusForm: SyllabusFormDataType;
    miscForm: MiscFormDataType;
}

type FormProp = {
    formActive: boolean;
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
    formData: FormType;
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

// key is secure
const TOPKEE_ENDPOINT = 
  'https://sg.fn.topkee.com/source-565495410377357395' +
  '?api_key=Q4DZSVW37zzaAxcxMh3Gy3rkD2Oq4qmmmoZ1mYy1VzU';

const Form: React.FC<FormProp> = ({ formActive, setFormActive, formData }) => {
    const userFormData = formData.userForm;
    const syllabusFormData = formData.syllabusForm;
    const miscFormData = formData.miscForm;

    // Init EmailJS
    useEffect(() => emailjs.init("gib2jZLcxQapdRDOq"), []);

    // Grab anonymous_id from ET
    const [anonId, setAnonId] = useState<string>("");
    useEffect(() => {
      if (window.ET?.getAnonymousId) {
        setAnonId(window.ET.getAnonymousId());
      }
    }, []);

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
        <UserForm {...data} updateFields={updateFields} userFormData={userFormData} />,
        <SyllabusForm {...data} updateFields={updateFields} syllabusFormData={syllabusFormData} />,
        <MiscForm {...data} updateFields={updateFields} miscFormData={miscFormData} />,
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
    
            alert("Successfully registered, we will get back to you as soon as possible!");

            // CDP
            if (window.ET && typeof window.ET.track === "function") {
                window.ET.track("SubmitForm", {
                    lead_source:    "Book a Lesson",
                    user_id:        "",
                    contact_method: data.contactMethod,
                    contact_id:     `${data.countryCode}-${data.contact}`,
                    first_name:     data.firstName,
                    last_name:      data.lastName,
                    school_name:    data.schoolName,
                    tutoring:       data.syllabus,
                    curriculum:     data.subSyllabus,
                    pricing:        data.pricing,
                    app:            data.noteTaking,
                    current_result: data.currResult,
                    expected_result:data.expResult,
                    referral_name:  data.referral,
                });
            }

            const mappedPricing = pricingData.pricing.map(item => ({
                name: (item.name).toLowerCase(),
                price: item.price,
                mult: item.perX,
            }));

            let value = 100;
            const item = mappedPricing.find(item => item.name === data.pricing);
            if (item) value = item.price / item.mult;

            // Google Ads conversion tracking
            window.gtag('event', 'conversion', {
                'send_to': 'AW-11487159496/tU7KCPHN848ZEMjJwOUq',
                'value': value,
                'currency': 'HKD',
                'transaction_id': `${data.firstName}-${data.lastName}-${data.contact}`
            });

            // POST to Topkee
            const topkeePayload = {
                event:        "SubmitForm",
                anonymous_id: anonId,
                properties: {
                lead_source:    "Book a Lesson",
                contact_method: data.contactMethod,
                contact_id:     `${data.countryCode}-${data.contact}`,
                first_name:     data.firstName,
                last_name:      data.lastName,
                school_name:    data.schoolName,
                tutoring:       data.syllabus,
                curriculum:     data.subSyllabus,
                pricing:        data.pricing,
                app:            data.noteTaking,
                current_result: data.currResult,
                expected_result:data.expResult,
                referral_name:  data.referral,
                }
            };

            await fetch(TOPKEE_ENDPOINT, {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify(topkeePayload),
            });
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