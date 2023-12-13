import { ReactNode } from "react";

type FormWrapperProps = {
    title: string;
    children: ReactNode;
}

export function FormWrapper({title, children} : FormWrapperProps) {
    return <>
        <div className="form-subtitle">{title}</div>
        <div className="form-input-wrapper">{children}</div>
    </>
}