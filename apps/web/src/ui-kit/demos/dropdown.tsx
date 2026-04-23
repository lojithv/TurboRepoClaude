import { useState } from "react";
import { Dropdown } from "@repo/ui/dropdown";

const cities = [
  { name: "London", code: "LDN" },
  { name: "New York", code: "NYC" },
  { name: "Paris", code: "PRS" },
  { name: "Tokyo", code: "TKY" },
];

export function DropdownDemo() {
  const [basic, setBasic] = useState<{ name: string; code: string } | null>(null);
  const [filterable, setFilterable] = useState<{ name: string; code: string } | null>(null);
  return (
    <div className="demo-grid">
      <section>
        <h3>Basic</h3>
        <Dropdown
          value={basic}
          onChange={(e) => setBasic(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a city"
          style={{ minWidth: 220 }}
        />
      </section>
      <section>
        <h3>With filter</h3>
        <Dropdown
          value={filterable}
          onChange={(e) => setFilterable(e.value)}
          options={cities}
          optionLabel="name"
          filter
          placeholder="Search city..."
          style={{ minWidth: 220 }}
        />
      </section>
    </div>
  );
}
