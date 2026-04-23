import { useState } from "react";
import { Button } from "@repo/ui/button";
import { PopupWindow } from "@repo/ui/popup-window";

export function PopupWindowDemo() {
  const [docOpen, setDocOpen] = useState(false);
  const [propsOpen, setPropsOpen] = useState(false);

  return (
    <div className="demo-grid">
      <section>
        <h3>Non-modal floating windows</h3>
        <p style={{ margin: "0 0 0.75rem", color: "#6b7280" }}>
          The page stays interactive behind each window. Drag by the header, resize from the
          edges, maximize or close from the header controls. Open multiple at once — each
          window is independent.
        </p>
        <div className="demo-row">
          <Button label="Open document" icon="pi pi-file" onClick={() => setDocOpen(true)} />
          <Button
            label="Open properties"
            icon="pi pi-cog"
            severity="secondary"
            onClick={() => setPropsOpen(true)}
          />
        </div>

        <PopupWindow
          visible={docOpen}
          onHide={() => setDocOpen(false)}
          header="Document.txt"
          style={{ width: "32rem", height: "22rem" }}
        >
          <h4 style={{ marginTop: 0 }}>The quiet loop</h4>
          <p>
            Release notes, draft content, or any secondary context belongs here. The window
            can be dragged, resized from any edge, or maximized — try it.
          </p>
          <p>
            Because it is non-modal, you can open a second window and arrange them
            side-by-side.
          </p>
        </PopupWindow>

        <PopupWindow
          visible={propsOpen}
          onHide={() => setPropsOpen(false)}
          header="Properties"
          position="top-right"
          style={{ width: "24rem" }}
        >
          <dl style={{ margin: 0 }}>
            <dt style={{ fontWeight: 600 }}>Owner</dt>
            <dd style={{ margin: "0 0 0.75rem" }}>jane@example.com</dd>
            <dt style={{ fontWeight: 600 }}>Size</dt>
            <dd style={{ margin: "0 0 0.75rem" }}>1.2 MB</dd>
            <dt style={{ fontWeight: 600 }}>Last modified</dt>
            <dd style={{ margin: 0 }}>2 hours ago</dd>
          </dl>
        </PopupWindow>
      </section>
    </div>
  );
}
