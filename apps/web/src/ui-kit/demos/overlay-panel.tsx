import { useRef } from "react";
import { Button } from "@repo/ui/button";
import { OverlayPanel, OverlayPanelHandle } from "@repo/ui/overlay-panel";

export function OverlayPanelDemo() {
  const op = useRef<OverlayPanelHandle>(null);

  return (
    <div className="demo-grid">
      <section>
        <h3>Click to reveal</h3>
        <Button
          label="Show profile"
          icon="pi pi-user"
          onClick={(e) => op.current?.toggle(e)}
        />
        <OverlayPanel ref={op} dismissable>
          <div style={{ minWidth: 220 }}>
            <strong>Jane Cooper</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#6b7280" }}>jane@example.com</p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>Admin · Engineering</p>
          </div>
        </OverlayPanel>
      </section>
    </div>
  );
}
