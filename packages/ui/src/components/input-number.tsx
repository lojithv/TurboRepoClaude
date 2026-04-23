import { InputNumber as PrimeInputNumber, InputNumberProps as PrimeInputNumberProps } from "primereact/inputnumber";

export interface InputNumberProps extends PrimeInputNumberProps {}

export function InputNumber({ className, ...props }: InputNumberProps) {
  return <PrimeInputNumber className={["repo-ui-input-number", className].filter(Boolean).join(" ")} {...props} />;
}
