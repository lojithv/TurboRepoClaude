import { Checkbox as PrimeCheckbox, CheckboxProps as PrimeCheckboxProps } from "primereact/checkbox";

export interface CheckboxProps extends PrimeCheckboxProps {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return <PrimeCheckbox className={["repo-ui-checkbox", className].filter(Boolean).join(" ")} {...props} />;
}
