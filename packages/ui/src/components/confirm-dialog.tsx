import {
  ConfirmDialog as PrimeConfirmDialog,
  ConfirmDialogProps as PrimeConfirmDialogProps,
} from "primereact/confirmdialog";

export { confirmDialog } from "primereact/confirmdialog";

export interface ConfirmDialogProps extends PrimeConfirmDialogProps {}

export function ConfirmDialog({ className, ...props }: ConfirmDialogProps) {
  return (
    <PrimeConfirmDialog
      className={["repo-ui-confirm-dialog", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
