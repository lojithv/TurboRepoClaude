import { TabView as PrimeTabView, TabViewProps as PrimeTabViewProps } from "primereact/tabview";
export { TabPanel } from "primereact/tabview";

export interface TabViewProps extends PrimeTabViewProps {}

export function TabView({ className, ...props }: TabViewProps) {
  return <PrimeTabView className={["repo-ui-tab-view", className].filter(Boolean).join(" ")} {...props} />;
}
