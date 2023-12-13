import { FormWrapper } from "./FormWrapper";

type SyllabusData = {
    syllabus: string;
}

type SyllabusFormProps = SyllabusData & {
    updateFields: (fields: Partial<SyllabusData>) => void;
}

export function SyllabusForm({ syllabus, updateFields }: SyllabusFormProps) {
    return (
        <FormWrapper title="Syllabus Details">
            <label>Tutoring Syllabus: *</label>
            <select
                autoFocus
                required
                value={syllabus}
                onChange={e => updateFields({ syllabus: e.target.value })}
            >
                <option value="ibdp">IBDP</option>
                <option value="alevel">A-Level</option>
                <option value="igcse">IGCSE</option>
            </select>
        </FormWrapper>
    )
}