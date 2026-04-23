import {
  ConfirmPopup as PrimeConfirmPopup,
  ConfirmPopupProps as PrimeConfirmPopupProps,
} from "primereact/confirmpopup";

export { confirmPopup } from "primereact/confirmpopup";

export interface ConfirmPopupProps extends PrimeConfirmPopupProps {}

export function ConfirmPopup({ className, ...props }: ConfirmPopupProps) {
  return (
    <PrimeConfirmPopup
      className={["repo-ui-confirm-popup", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
