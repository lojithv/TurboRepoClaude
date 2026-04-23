import { FormEvent, ReactNode } from "react";
import { Dialog as PrimeDialog, DialogProps as PrimeDialogProps } from "primereact/dialog";
import { Button } from "./button";

export interface PopupFormProps extends Omit<PrimeDialogProps, "footer" | "onHide" | "children"> {
  onHide: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  submitLabel?: string;
  submitIcon?: string;
  submitSeverity?: "secondary" | "success" | "info" | "warning" | "danger" | "help";
  cancelLabel?: string;
  submitting?: boolean;
  submitDisabled?: boolean;
  children: ReactNode;
}

export function PopupForm({
  onHide,
  onSubmit,
  submitLabel = "Submit",
  submitIcon,
  submitSeverity,
  cancelLabel = "Cancel",
  submitting = false,
  submitDisabled = false,
  className,
  children,
  ...dialogProps
}: PopupFormProps) {
  const handleHide = () => {
    if (!submitting) onHide();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || submitDisabled) return;
    onSubmit(e);
  };

  return (
    <PrimeDialog
      onHide={handleHide}
      closeOnEscape={!submitting}
      closable={!submitting}
      className={["repo-ui-popup-form", className].filter(Boolean).join(" ")}
      {...dialogProps}
    >
      <form className="repo-ui-popup-form__form" onSubmit={handleSubmit} noValidate>
        <div className="repo-ui-popup-form__body">{children}</div>
        <div className="repo-ui-popup-form__footer">
          <Button
            type="button"
            label={cancelLabel}
            severity="secondary"
            text
            onClick={handleHide}
            disabled={submitting}
          />
          <Button
            type="submit"
            label={submitLabel}
            icon={submitIcon}
            severity={submitSeverity}
            loading={submitting}
            disabled={submitDisabled}
          />
        </div>
      </form>
    </PrimeDialog>
  );
}
