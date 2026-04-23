import { useState } from "react";
import { Button } from "@repo/ui/button";
import { ConfirmDialog, confirmDialog } from "@repo/ui/confirm-dialog";

export function ConfirmDialogDemo() {
  const [result, setResult] = useState<string>("");

  const ask = () => {
    confirmDialog({
      message: "Are you sure you want to delete this record?",
      header: "Delete confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      accept: () => setResult("Accepted"),
      reject: () => setResult("Rejected"),
    });
  };

  return (
    <div className="demo-grid">
      <section>
        <h3>Imperative (confirmDialog)</h3>
        <div className="demo-inline">
          <Button label="Delete record" severity="danger" icon="pi pi-trash" onClick={ask} />
          {result && <span>Result: <strong>{result}</strong></span>}
        </div>
        <ConfirmDialog />
      </section>
    </div>
  );
}
