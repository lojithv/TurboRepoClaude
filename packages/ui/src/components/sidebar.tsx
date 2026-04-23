import { Sidebar as PrimeSidebar, SidebarProps as PrimeSidebarProps } from "primereact/sidebar";

export interface SidebarProps extends PrimeSidebarProps {}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <PrimeSidebar className={["repo-ui-sidebar", className].filter(Boolean).join(" ")} {...props} />
  );
}
