import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import Select, { ActionMeta, CSSObjectWithLabel, OnChangeValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

type SyllabusData = {
    syllabus: string;
    subSyllabus: string;
    pricing: string;
};

type SyllabusFormProps = SyllabusData & {
    updateFields: (fields: Partial<SyllabusData>) => void;
};

export function SyllabusForm({ syllabus, subSyllabus, pricing, updateFields }: SyllabusFormProps) {
    const [showSubSyllabus, setShowSubSyllabus] = useState(true);

    const syllabusOptions: OptionType[] = [
        { value: "ibdp", label: "IBDP" },
        { value: "alevel", label: "A-Level" },
        { value: "igcse", label: "IGCSE / IBMYP" },
        { value: "others", label: "Others" },
    ]

    const handleSyllabusOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedSyllabus = option?.value;
        updateFields({ syllabus: selectedSyllabus, subSyllabus: "" });
        setShowSubSyllabus(true);
    }

    const handleSubSyllabusOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedSubSyllabus = option?.value;
        updateFields({ subSyllabus: selectedSubSyllabus });
    };

    const ibdpOptions: OptionType[] = [
        { value: "aahl", label: "AAHL" },
        { value: "aasl", label: "AASL" },
        { value: "aihl", label: "AIHL" },
        { value: "aisl", label: "AISL" },
        { value: "ia", label: "Math IA" },
    ]

    const alevelOptions: OptionType[] = [
        { value: "yfm01", label: "IAL Edexcel Further Math (YFM01)" },
        { value: "9231", label: "IAL Cambridge Further Math (9231)" },
        { value: "7367", label: "AL AQA Further Math (7367)" },
        { value: "yma01", label: "IAL Edexcel Math (YMA01)" },
        { value: "9709", label: "IAL Cambridge Math (9709)" },
        { value: "9MA0", label: "AL Edexcel Math (9MA0)" },
        { value: "7357", label: "AL AQA Math (7357)" },
        { value: "H240", label: "AL OCR Math A (H240)" },
        { value: "alothers", label: "Others" },
    ]

    const igcseOptions: OptionType[] = [
        { value: "0607", label: "Cambridge International Math (0607)" },
        { value: "0606", label: "Cambridge Additional Math (0606)" },
        { value: "0580", label: "Cambridge Math (0580)" },
        { value: "4PM1", label: "Edexcel Math (4PM1)" },
        { value: "4PM0", label: "Edexcel Further Math (4PM0)" },
        { value: "ibmyp", label: "IBMYP" },
    ]

    const pricingOptions: OptionType[] = [
        { value: "starter", label: "Starter (HKD 200 per week)" },
        { value: "premium", label: "Premium (HKD 6480 per 4 lessons)" },
        { value: "elite", label: "Elite (HKD 14880 per 8 lessons)" },
    ]

    const handlePricingOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedPricing = option?.value;
        updateFields({ pricing: selectedPricing });
    }

    const renderSubSyllabusOptions = () => {
        if (showSubSyllabus) {
            switch (syllabus) {
                case "ibdp":
                    return (
                        <>
                            <label>IBDP Curriculum: *</label>
                            <Select
                                className="form-input-select"
                                required
                                value={ibdpOptions.find(option => option.value == subSyllabus)}
                                options={ibdpOptions}
                                onChange={handleSubSyllabusOnChange}
                                menuPortalTarget={document.body}
                                styles={{
                                    menuPortal: (base, _): CSSObjectWithLabel => ({
                                        ...base,
                                        zIndex: 9999,
                                        fontSize: "24px",
                                    } as CSSObjectWithLabel),
                                }}
                                menuPosition={'fixed'}
                            ></Select>
                        </>
                    );
                case "alevel":
                    return (
                        <>
                            <label>A-Level Curriculum: *</label>
                            <Select
                                className="form-input-select"
                                required
                                value={alevelOptions.find(option => option.value == subSyllabus)}
                                options={alevelOptions}
                                onChange={handleSubSyllabusOnChange}
                                menuPortalTarget={document.body}
                                styles={{
                                    menuPortal: (base, _): CSSObjectWithLabel => ({
                                        ...base,
                                        zIndex: 9999,
                                        fontSize: "24px",
                                    } as CSSObjectWithLabel),
                                }}
                                menuPosition={'fixed'}
                            ></Select>
                        </>
                    );
                case "igcse":
                    return (
                        <>
                            <label>IGCSE / IBMYP Curriculum: *</label>
                            <Select
                                className="form-input-select"
                                required
                                value={igcseOptions.find(option => option.value == subSyllabus)}
                                options={igcseOptions}
                                onChange={handleSubSyllabusOnChange}
                                menuPortalTarget={document.body}
                                styles={{
                                    menuPortal: (base, _): CSSObjectWithLabel => ({
                                        ...base,
                                        zIndex: 9999,
                                        fontSize: "24px",
                                    } as CSSObjectWithLabel),
                                }}
                                menuPosition={'fixed'}
                            ></Select>
                        </>
                    );
                case "others":
                    return (
                        <>
                            <label>Please Specify: *</label>
                            <input
                                required
                                type="text"
                                value={subSyllabus || ""}
                                onChange={e => updateFields({ subSyllabus: e.target.value })}
                            />
                        </>
                    );
                default:
                    return null;
            }
        }
        return null;
    };

    return (
        <FormWrapper title="Syllabus Details">
            <label>Tutoring Syllabus: *</label>
            <Select
                className="form-input-select"
                autoFocus
                required
                value={syllabusOptions.find(option => option.value == syllabus)}
                options={syllabusOptions}
                onChange={handleSyllabusOnChange}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: (base, _): CSSObjectWithLabel => ({
                        ...base,
                        zIndex: 9999,
                        fontSize: "24px",
                    } as CSSObjectWithLabel),
                }}
                menuPosition={'fixed'}
            ></Select>
            {renderSubSyllabusOptions()}
            <label>Pricing Option: *</label>
            <Select
                className="form-input-select"
                autoFocus
                required
                value={pricingOptions.find(option => option.value == pricing)}
                options={pricingOptions}
                onChange={handlePricingOnChange}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: (base, _): CSSObjectWithLabel => ({
                        ...base,
                        zIndex: 9999,
                        fontSize: "24px",
                    } as CSSObjectWithLabel),
                }}
                menuPosition={'fixed'}
            ></Select>
        </FormWrapper>
    )
}