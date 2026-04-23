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
  { id: "form-field", name: "FormField", category: "Form", description: "Label / control / hint / error row for consistent form layouts." },

  { id: "dialog", name: "Dialog", category: "Overlay", description: "Modal overlay for focused interactions." },
  { id: "popup-window", name: "PopupWindow", category: "Overlay", description: "Non-modal, draggable, resizable, maximizable floating window." },
  { id: "popup-form", name: "PopupForm", category: "Overlay", description: "Modal form with built-in submit/cancel footer and loading state." },
  { id: "confirm-dialog", name: "ConfirmDialog", category: "Overlay", description: "Modal confirmation prompt with accept / reject callbacks." },
  { id: "confirm-popup", name: "ConfirmPopup", category: "Overlay", description: "Inline, anchored confirmation popup near the trigger." },
  { id: "sidebar", name: "Sidebar", category: "Overlay", description: "Slide-in drawer from any edge of the viewport." },
  { id: "overlay-panel", name: "OverlayPanel", category: "Overlay", description: "Anchored popover for secondary content." },
  { id: "toast", name: "Toast", category: "Overlay", description: "Transient notification messages via imperative API." },
  { id: "tooltip", name: "Tooltip", category: "Overlay", description: "Hover / focus tooltips driven by data attributes." },
  { id: "context-menu", name: "ContextMenu", category: "Overlay", description: "Right-click contextual menu anchored to any element." },

  { id: "card", name: "Card", category: "Layout", description: "Container with header, body and footer slots." },
  { id: "tab-view", name: "TabView", category: "Layout", description: "Tabbed content switcher." },

  { id: "data-table", name: "DataTable", category: "Data", description: "Tabular display with sorting, paging and selection." },
];
