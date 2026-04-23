import { Tooltip as PrimeTooltip, TooltipProps as PrimeTooltipProps } from "primereact/tooltip";

export interface TooltipProps extends PrimeTooltipProps {}

export function Tooltip({ className, ...props }: TooltipProps) {
  return (
    <PrimeTooltip className={["repo-ui-tooltip", className].filter(Boolean).join(" ")} {...props} />
  );
}
