import { useState } from "react";
import { InputText } from "@repo/ui/input-text";

export function InputTextDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="demo-grid">
      <section>
        <h3>Default</h3>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here..." />
      </section>
      <section>
        <h3>Invalid</h3>
        <InputText value="not-an-email" invalid />
      </section>
      <section>
        <h3>Sizes</h3>
        <div className="demo-row">
          <InputText placeholder="Small" className="p-inputtext-sm" />
          <InputText placeholder="Normal" />
          <InputText placeholder="Large" className="p-inputtext-lg" />
        </div>
      </section>
    </div>
  );
}
