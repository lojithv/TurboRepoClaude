import { useRef } from "react";
import type { MenuItem } from "primereact/menuitem";
import { ContextMenu, ContextMenuHandle } from "@repo/ui/context-menu";

export function ContextMenuDemo() {
  const cm = useRef<ContextMenuHandle>(null);

  const items: MenuItem[] = [
    { label: "View", icon: "pi pi-eye" },
    { label: "Edit", icon: "pi pi-pencil" },
    { label: "Duplicate", icon: "pi pi-copy" },
    { separator: true },
    { label: "Delete", icon: "pi pi-trash" },
  ];

  return (
    <div className="demo-grid">
      <section>
        <h3>Right-click target</h3>
        <div
          onContextMenu={(e) => cm.current?.show(e)}
          style={{
            padding: "2.5rem 1rem",
            textAlign: "center",
            borderRadius: 8,
            border: "1px dashed #cbd5e1",
            background: "#f8fafc",
            userSelect: "none",
            color: "#475569",
          }}
        >
          Right-click inside this box
        </div>
        <ContextMenu ref={cm} model={items} />
      </section>
    </div>
  );
}
