import { forwardRef } from "react";
import {
  ContextMenu as PrimeContextMenu,
  ContextMenuProps as PrimeContextMenuProps,
} from "primereact/contextmenu";

export interface ContextMenuProps extends PrimeContextMenuProps {}
export type ContextMenuHandle = PrimeContextMenu;

export const ContextMenu = forwardRef<PrimeContextMenu, ContextMenuProps>(
  ({ className, ...props }, ref) => (
    <PrimeContextMenu
      ref={ref}
      className={["repo-ui-context-menu", className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
);
ContextMenu.displayName = "ContextMenu";
