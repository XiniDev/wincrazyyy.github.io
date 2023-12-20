import { ReactNode } from "react";

type FormWrapperProps = {
    title: string;
    children: ReactNode;
}

export function FormWrapper({title, children} : FormWrapperProps) {
    return <>
        <div className="form-title">{title}</div>
        <div className="form-input-wrapper">{children}</div>
    </>
}