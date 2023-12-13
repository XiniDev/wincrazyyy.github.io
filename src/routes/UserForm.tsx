import { FormWrapper } from "./FormWrapper";

type UserData = {
    phoneNo: string;
    firstName: string;
    lastName: string;
    schoolName: string;
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
}

export function UserForm({ phoneNo, firstName, lastName, schoolName, updateFields }: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label>WhatsApp / WeChat: *</label>
            <input
                autoFocus
                required
                type="text"
                value={phoneNo}
                onChange={e => updateFields({ phoneNo: e.target.value })}
            />
            <div className="form-input-row">
                <div className="form-input-column">
                    <label>First Name: *</label>
                    <input
                        required
                        type="text"
                        value={firstName}
                        onChange={e => updateFields({ firstName: e.target.value })}
                    />
                </div>
                <div className="form-input-column">
                    <label>Last Name: *</label>
                    <input
                        required
                        type="text"
                        value={lastName}
                        onChange={e => updateFields({ lastName: e.target.value })}
                    />
                </div>
            </div>
            <label>School Name: *</label>
            <input
                required
                type="text"
                value={schoolName}
                onChange={e => updateFields({ schoolName: e.target.value })}
            />
        </FormWrapper>
    )
}