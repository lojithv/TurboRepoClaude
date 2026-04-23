import { Dialog as PrimeDialog, DialogProps as PrimeDialogProps } from "primereact/dialog";

export interface DialogProps extends PrimeDialogProps {}

export function Dialog({ className, ...props }: DialogProps) {
  return <PrimeDialog className={["repo-ui-dialog", className].filter(Boolean).join(" ")} {...props} />;
}
