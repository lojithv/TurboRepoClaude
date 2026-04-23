import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Dialog } from "@repo/ui/dialog";

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="demo-grid">
      <section>
        <h3>Modal dialog</h3>
        <Button label="Open dialog" icon="pi pi-external-link" onClick={() => setOpen(true)} />
        <Dialog
          header="Confirm action"
          visible={open}
          onHide={() => setOpen(false)}
          style={{ width: "24rem" }}
          footer={
            <div className="demo-actions">
              <Button label="Cancel" severity="secondary" text onClick={() => setOpen(false)} />
              <Button label="Confirm" icon="pi pi-check" onClick={() => setOpen(false)} />
            </div>
          }
        >
          <p style={{ margin: 0 }}>Are you sure you want to proceed with this action?</p>
        </Dialog>
      </section>
    </div>
  );
}
