import { useState } from "react";
import { Checkbox } from "@repo/ui/checkbox";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [categories, setCategories] = useState<string[]>(["Work"]);

  const toggle = (value: string) => {
    setCategories((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  return (
    <div className="demo-grid">
      <section>
        <h3>Single</h3>
        <label className="demo-inline">
          <Checkbox checked={checked} onChange={(e) => setChecked(!!e.checked)} />
          <span>Subscribe to newsletter</span>
        </label>
      </section>
      <section>
        <h3>Group</h3>
        <div className="demo-stack">
          {["Work", "Personal", "Errands"].map((c) => (
            <label key={c} className="demo-inline">
              <Checkbox inputId={c} checked={categories.includes(c)} onChange={() => toggle(c)} />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
