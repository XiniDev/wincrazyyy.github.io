import { FormWrapper } from "./FormWrapper";
import Select, { ActionMeta, OnChangeValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

type MiscData = {
    noteTaking: string;
    currResult: string;
    expResult: string;
    referral: string;
};

type MiscFormProps = MiscData & {
    updateFields: (fields: Partial<MiscData>) => void;
};

export function MiscForm({ noteTaking, currResult, expResult, referral, updateFields }: MiscFormProps) {
    const handleReferralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const alphabeticRegex = /^[A-Za-z]*$/;
        const inputVal = e.target.value;
        if (alphabeticRegex.test(inputVal)) {
            updateFields({ referral: e.target.value });
        }
    };

    const noteTakingOptions: OptionType[] = [
        { value: "goodnotes", label: "Good Notes" },
        { value: "notability", label: "Notability" },
        { value: "notipad", label: "Not Using iPad" },
        { value: "others", label: "Others" },
    ]

    const handleNoteTaking = (option: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedNoteTaking = option?.value;
        updateFields({ noteTaking: selectedNoteTaking });
    }

    return (
        <FormWrapper title="Other Details">
            <label>Which note taking app do you use on iPad? *</label>
            <Select
                required
                // value={subSyllabus || ""}
                options={noteTakingOptions}
                onChange={handleNoteTaking}
            ></Select>
            <div className="form-input-row">
                <div className="form-input-column">
                    <label>Current Math Result (before tutorial): *</label>
                    <input
                        required
                        type="text"
                        value={currResult}
                        onChange={e => updateFields({ currResult: e.target.value })}
                    />
                </div>
                <div className="form-input-column">
                    <label>Expected Math Result (after tutorial): *</label>
                    <input
                        required
                        type="text"
                        value={expResult}
                        onChange={e => updateFields({ expResult: e.target.value })}
                    />
                </div>
            </div>
            <label>Referral Name (if applicable):</label>
            <input
                type="text"
                value={referral}
                onChange={handleReferralChange}
            />
        </FormWrapper>
    )
}