import { useRef } from "react";
import { Button } from "@repo/ui/button";
import { Toast, ToastHandle } from "@repo/ui/toast";

type Severity = "success" | "info" | "warn" | "error";

export function ToastDemo() {
  const toast = useRef<ToastHandle>(null);

  const show = (severity: Severity) =>
    toast.current?.show({
      severity,
      summary: severity[0]!.toUpperCase() + severity.slice(1),
      detail: `This is a ${severity} toast.`,
      life: 3000,
    });

  return (
    <div className="demo-grid">
      <section>
        <h3>Severities</h3>
        <div className="demo-row">
          <Button label="Success" severity="success" onClick={() => show("success")} />
          <Button label="Info" severity="info" onClick={() => show("info")} />
          <Button label="Warn" severity="warning" onClick={() => show("warn")} />
          <Button label="Error" severity="danger" onClick={() => show("error")} />
        </div>
        <Toast ref={toast} position="top-right" />
      </section>
    </div>
  );
}
