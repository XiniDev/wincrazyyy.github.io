import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import Select, { ActionMeta, CSSObjectWithLabel, OnChangeValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

type OptionExtendedType = {
    value: string;
    label: string;
    text: string;
};

type OptionListType = {
    value: string;
    options: OptionType[];
};

export type SyllabusFormDataType = {
    title: string;
    syllabus: string;
    syllabusOptions: OptionExtendedType[];
    subSyllabusOptions: OptionListType[];
    pricing: string;
    pricingOptions: OptionType[];
};


type SyllabusData = {
    syllabus: string;
    subSyllabus: string;
    pricing: string;
};

type SyllabusFormProps = SyllabusData & {
    updateFields: (fields: Partial<SyllabusData>) => void;
    syllabusFormData: SyllabusFormDataType;
};

export function SyllabusForm({ syllabus, subSyllabus, pricing, updateFields, syllabusFormData }: SyllabusFormProps) {
    const [showSubSyllabus, setShowSubSyllabus] = useState(true);

    const syllabusOptions: OptionType[] = syllabusFormData.syllabusOptions.map((option) => ({
        value: option.value,
        label: option.label,
    }));

    const handleSyllabusOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedSyllabus = option?.value;
        updateFields({ syllabus: selectedSyllabus, subSyllabus: "" });
        setShowSubSyllabus(true);
    }

    const handleSubSyllabusOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedSubSyllabus = option?.value;
        updateFields({ subSyllabus: selectedSubSyllabus });
    };

    const pricingOptions: OptionType[] = syllabusFormData.pricingOptions;

    const handlePricingOnChange = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedPricing = option?.value;
        updateFields({ pricing: selectedPricing });
    }

    const renderSubSyllabusOptions = () => {
        if (syllabusOptions.find(option => option.value == syllabus) && showSubSyllabus) {
            switch (syllabus) {
                case "others":
                    return (
                        <>
                            <label>{syllabusFormData.syllabusOptions.find(option => option.value == syllabus)?.text}: *</label>
                            <input
                                required
                                type="text"
                                value={subSyllabus || ""}
                                onChange={e => updateFields({ subSyllabus: e.target.value })}
                            />
                        </>
                    );
                default:
                    return (
                        <>
                            <label>{syllabusFormData.syllabusOptions.find(option => option.value == syllabus)?.text}: *</label>
                            <Select
                                className="form-input-select"
                                required
                                isSearchable={false}
                                value={syllabusFormData.subSyllabusOptions.find(option => option.value == syllabus)?.options.find(option => option.value == subSyllabus)}
                                options={syllabusFormData.subSyllabusOptions.find(option => option.value == syllabus)?.options}
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
            }
        }
        return null;
    };

    return (
        <FormWrapper title={syllabusFormData.title}>
            <label>{syllabusFormData.syllabus}: *</label>
            <Select
                className="form-input-select"
                autoFocus
                required
                isSearchable={false}
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
            <label>{syllabusFormData.pricing}: *</label>
            <Select
                className="form-input-select"
                autoFocus
                required
                isSearchable={false}
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