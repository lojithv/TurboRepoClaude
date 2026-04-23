import { InputText as PrimeInputText, InputTextProps as PrimeInputTextProps } from "primereact/inputtext";

export interface InputTextProps extends PrimeInputTextProps {}

export function InputText({ className, ...props }: InputTextProps) {
  return <PrimeInputText className={["repo-ui-input-text", className].filter(Boolean).join(" ")} {...props} />;
}
