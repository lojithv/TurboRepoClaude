import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={`repo-ui-button repo-ui-button--${variant}`} {...props}>
      {children}
    </button>
  );
}
