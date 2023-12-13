import { FormWrapper } from "./FormWrapper";

type MiscData = {
}

type MiscFormProps = MiscData & {
    updateFields: (fields: Partial<MiscData>) => void;
}

export function MiscForm({ updateFields }: MiscFormProps) {
    return (
        <FormWrapper title="Other Details">
            <label>Which note taking app do you use on iPad? *</label>
            <input autoFocus required type="text"></input>
            <label>Current Math Result (before tutorial): *</label>
            <input required type="text"></input>
            <label>Expected Math Result (after tutorial): *</label>
            <input required type="text"></input>
            <label>Referral Name (if applicable):</label>
            <input type="text"></input>
        </FormWrapper>
    )
}