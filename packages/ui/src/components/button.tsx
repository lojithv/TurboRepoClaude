import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from "primereact/button";

export interface ButtonProps extends PrimeButtonProps {}

export function Button({ className, ...props }: ButtonProps) {
  return <PrimeButton className={["repo-ui-button", className].filter(Boolean).join(" ")} {...props} />;
}
