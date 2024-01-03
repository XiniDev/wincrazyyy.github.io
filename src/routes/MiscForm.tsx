import { FormWrapper } from "./FormWrapper";
import Select, { ActionMeta, CSSObjectWithLabel, OnChangeValue } from "react-select";

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
                className="form-input-select"
                required
                value={noteTakingOptions.find(option => option.value == noteTaking)}
                options={noteTakingOptions}
                onChange={handleNoteTaking}
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
            <div className="form-input-row">
                <div className="form-input-column">
                    <label>Current Math Result: *</label>
                    <input
                        required
                        type="text"
                        value={currResult}
                        size={1}
                        onChange={e => updateFields({ currResult: e.target.value })}
                    />
                </div>
                <div className="form-input-column">
                    <label>Expected Math Result: *</label>
                    <input
                        required
                        type="text"
                        value={expResult}
                        size={1}
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