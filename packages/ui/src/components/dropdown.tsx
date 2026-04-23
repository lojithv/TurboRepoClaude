import { Dropdown as PrimeDropdown, DropdownProps as PrimeDropdownProps } from "primereact/dropdown";

export interface DropdownProps extends PrimeDropdownProps {}

export function Dropdown({ className, ...props }: DropdownProps) {
  return <PrimeDropdown className={["repo-ui-dropdown", className].filter(Boolean).join(" ")} {...props} />;
}
