import { Dialog as PrimeDialog, DialogProps as PrimeDialogProps } from "primereact/dialog";

export interface PopupWindowProps extends Omit<PrimeDialogProps, "modal"> {}

export function PopupWindow({
  className,
  draggable = true,
  resizable = true,
  maximizable = true,
  closeOnEscape = true,
  dismissableMask = false,
  ...props
}: PopupWindowProps) {
  return (
    <PrimeDialog
      modal={false}
      draggable={draggable}
      resizable={resizable}
      maximizable={maximizable}
      closeOnEscape={closeOnEscape}
      dismissableMask={dismissableMask}
      className={["repo-ui-popup-window", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
