import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import Select, { ActionMeta, CSSObjectWithLabel, OnChangeValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

type UserData = {
    contactMethod: string;
    countryCode: string;
    contact: string;
    firstName: string;
    lastName: string;
    schoolName: string;
};

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({ contactMethod, countryCode, contact, firstName, lastName, schoolName, updateFields }: UserFormProps) {
    const [showContact, setShowContact] = useState(true);

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericRegex = /^[0-9]{0,3}$/;
        const selectedCountryCode = e.target.value;
        if (numericRegex.test(selectedCountryCode)) {
            updateFields({ countryCode: selectedCountryCode });
        }
    };

    const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericRegex = /^[0-9]*$/;
        const selectedContact = e.target.value;
        if (numericRegex.test(selectedContact)) {
            updateFields({ contact: selectedContact });
        }
    };

    const handleWeChatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedContact = e.target.value;
        updateFields({ contact: selectedContact });
    };

    const contactMethodOptions: OptionType[] = [
        { value: 'whatsapp', label: "WhatsApp" },
        { value: 'wechat', label: "WeChat" }
    ];

    const contactMethodOnChange = (newValue: OnChangeValue<OptionType, false> | null, actionMeta: ActionMeta<OptionType>) => {
        const selectedContactMethod = newValue?.value;
        updateFields({ contactMethod: selectedContactMethod, contact: "", countryCode: "852" });
        setShowContact(true);
    }

    const renderContactOptions = () => {
        if (showContact) {
            switch (contactMethod) {
                case "whatsapp":
                    return (
                        <>
                            <div className="form-input-column">
                                <label>WhatsApp: *</label>
                                <div className="form-input-whatsapp">
                                    <input
                                            className="form-input-country-code"
                                            required
                                            type="text"
                                            value={countryCode}
                                            size={1}
                                            onChange={handleCountryCodeChange}
                                        />
                                    <input
                                        autoFocus
                                        required
                                        type="text"
                                        value={contact}
                                        size={1}
                                        onChange={handleWhatsAppChange}
                                    />
                                </div>
                            </div>
                        </>
                    );
                case "wechat":
                    return (
                        <>
                            <label>WeChat ID: *</label>
                            <input
                                autoFocus
                                required
                                type="text"
                                value={contact}
                                onChange={handleWeChatChange}
                            />
                        </>
                    );
                default:
                    return null;
            }
        }
        return null;
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const alphabeticRegex = /^[A-Za-z]*$/;
        const inputVal = e.target.value;
        if (alphabeticRegex.test(inputVal)) {
            updateFields({ firstName: e.target.value });
        }
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const alphabeticRegex = /^[A-Za-z]*$/;
        const inputVal = e.target.value;
        if (alphabeticRegex.test(inputVal)) {
            updateFields({ lastName: e.target.value });
        }
    };

    return (
        <FormWrapper title="User Details">
            <label>Contact Method: *</label>
            <Select
                className="form-input-select"
                autoFocus
                required
                value={contactMethodOptions.find(option => option.value == contactMethod)}
                options={contactMethodOptions}
                onChange={contactMethodOnChange}
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
            {renderContactOptions()}
            <div className="form-input-row">
                <div className="form-input-column">
                    <label>First Name: *</label>
                    <input
                        required
                        type="text"
                        value={firstName}
                        size={1}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="form-input-column">
                    <label>Last Name: *</label>
                    <input
                        required
                        type="text"
                        value={lastName}
                        size={1}
                        onChange={handleLastNameChange}
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