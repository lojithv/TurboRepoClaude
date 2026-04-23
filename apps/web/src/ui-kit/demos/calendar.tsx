import { useState } from "react";
import { Calendar } from "@repo/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | null | undefined>(null);
  const [range, setRange] = useState<(Date | null)[] | null | undefined>(null);
  return (
    <div className="demo-grid">
      <section>
        <h3>Single date</h3>
        <Calendar<"single"> value={date} onChange={(e) => setDate(e.value)} showIcon />
      </section>
      <section>
        <h3>Date range</h3>
        <Calendar<"range">
          value={range}
          onChange={(e) => setRange(e.value)}
          selectionMode="range"
          readOnlyInput
          showIcon
        />
      </section>
    </div>
  );
}
