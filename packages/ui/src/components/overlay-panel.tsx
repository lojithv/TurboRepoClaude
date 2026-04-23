import { forwardRef } from "react";
import {
  OverlayPanel as PrimeOverlayPanel,
  OverlayPanelProps as PrimeOverlayPanelProps,
} from "primereact/overlaypanel";

export interface OverlayPanelProps extends PrimeOverlayPanelProps {}
export type OverlayPanelHandle = PrimeOverlayPanel;

export const OverlayPanel = forwardRef<PrimeOverlayPanel, OverlayPanelProps>(
  ({ className, ...props }, ref) => (
    <PrimeOverlayPanel
      ref={ref}
      className={["repo-ui-overlay-panel", className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
);
OverlayPanel.displayName = "OverlayPanel";
