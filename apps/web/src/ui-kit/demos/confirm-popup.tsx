import { MouseEvent, useState } from "react";
import { Button } from "@repo/ui/button";
import { ConfirmPopup, confirmPopup } from "@repo/ui/confirm-popup";

export function ConfirmPopupDemo() {
  const [result, setResult] = useState<string>("");

  const ask = (event: MouseEvent<HTMLButtonElement>) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Discard unsaved changes?",
      icon: "pi pi-info-circle",
      accept: () => setResult("Discarded"),
      reject: () => setResult("Kept"),
    });
  };

  return (
    <div className="demo-grid">
      <section>
        <h3>Anchored to trigger</h3>
        <div className="demo-inline">
          <Button label="Discard" severity="warning" onClick={ask} />
          {result && <span>Result: <strong>{result}</strong></span>}
        </div>
        <ConfirmPopup />
      </section>
    </div>
  );
}
