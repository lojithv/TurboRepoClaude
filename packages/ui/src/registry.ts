export interface ComponentMeta {
  id: string;
  name: string;
  category: "Form" | "Data" | "Overlay" | "Layout";
  description: string;
}

export const componentRegistry: ComponentMeta[] = [
  { id: "button", name: "Button", category: "Form", description: "Trigger actions with optional icons, severities and loading state." },
  { id: "input-text", name: "InputText", category: "Form", description: "Single-line text input with invalid and size variants." },
  { id: "input-number", name: "InputNumber", category: "Form", description: "Numeric input with formatting, currency and step controls." },
  { id: "dropdown", name: "Dropdown", category: "Form", description: "Selection from a list of options with optional filter." },
  { id: "checkbox", name: "Checkbox", category: "Form", description: "Boolean selection control." },
  { id: "calendar", name: "Calendar", category: "Form", description: "Date / date-time / range picker." },
  { id: "dialog", name: "Dialog", category: "Overlay", description: "Modal overlay for focused interactions." },
  { id: "card", name: "Card", category: "Layout", description: "Container with header, body and footer slots." },
  { id: "data-table", name: "DataTable", category: "Data", description: "Tabular display with sorting, paging and selection." },
  { id: "tab-view", name: "TabView", category: "Layout", description: "Tabbed content switcher." },
];
