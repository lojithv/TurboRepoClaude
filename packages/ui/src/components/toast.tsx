import { forwardRef } from "react";
import { Toast as PrimeToast, ToastProps as PrimeToastProps } from "primereact/toast";

export interface ToastProps extends PrimeToastProps {}
export type ToastHandle = PrimeToast;
export type { ToastMessage } from "primereact/toast";

export const Toast = forwardRef<PrimeToast, ToastProps>(({ className, ...props }, ref) => (
  <PrimeToast
    ref={ref}
    className={["repo-ui-toast", className].filter(Boolean).join(" ")}
    {...props}
  />
));
Toast.displayName = "Toast";
