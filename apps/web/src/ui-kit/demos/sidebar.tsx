import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Sidebar } from "@repo/ui/sidebar";

export function SidebarDemo() {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);

  return (
    <div className="demo-grid">
      <section>
        <h3>Positions</h3>
        <div className="demo-row">
          <Button label="Left" icon="pi pi-arrow-right" onClick={() => setLeft(true)} />
          <Button label="Right" icon="pi pi-arrow-left" iconPos="right" onClick={() => setRight(true)} />
          <Button label="Top" icon="pi pi-arrow-down" onClick={() => setTop(true)} />
        </div>

        <Sidebar
          visible={left}
          onHide={() => setLeft(false)}
          position="left"
          header={<h3 style={{ margin: 0 }}>Navigation</h3>}
        >
          <p>Place menu, filters or settings here.</p>
        </Sidebar>

        <Sidebar
          visible={right}
          onHide={() => setRight(false)}
          position="right"
          header={<h3 style={{ margin: 0 }}>Activity</h3>}
        >
          <p>Timeline, comments or notifications.</p>
        </Sidebar>

        <Sidebar
          visible={top}
          onHide={() => setTop(false)}
          position="top"
          style={{ height: "auto" }}
        >
          <h3 style={{ marginTop: 0 }}>Announcement</h3>
          <p style={{ margin: 0 }}>Slides in from the top edge of the viewport.</p>
        </Sidebar>
      </section>
    </div>
  );
}
