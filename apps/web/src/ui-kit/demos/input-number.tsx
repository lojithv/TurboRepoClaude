import { useState } from "react";
import { InputNumber } from "@repo/ui/input-number";

export function InputNumberDemo() {
  const [amount, setAmount] = useState<number | null>(1500);
  const [qty, setQty] = useState<number | null>(1);
  return (
    <div className="demo-grid">
      <section>
        <h3>Currency (USD)</h3>
        <InputNumber value={amount} onValueChange={(e) => setAmount(e.value ?? null)} mode="currency" currency="USD" />
      </section>
      <section>
        <h3>Stepper</h3>
        <InputNumber value={qty} onValueChange={(e) => setQty(e.value ?? null)} showButtons min={0} max={99} />
      </section>
    </div>
  );
}
