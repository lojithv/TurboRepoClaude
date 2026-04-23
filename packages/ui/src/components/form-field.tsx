import { ReactNode } from "react";

export interface FormFieldProps {
  label?: ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, required, hint, error, className, children }: FormFieldProps) {
  const message = error ?? hint;
  return (
    <div className={["repo-ui-form-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="repo-ui-form-field__label" htmlFor={htmlFor}>
          {label}
          {required && <span className="repo-ui-form-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="repo-ui-form-field__control">{children}</div>
      {message && (
        <div className={`repo-ui-form-field__help${error ? " is-error" : ""}`}>{message}</div>
      )}
    </div>
  );
}
