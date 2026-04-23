import { ComponentType, useMemo, useState } from "react";
import { componentRegistry, ComponentMeta } from "@repo/ui/registry";
import "./ui-kit.css";

import { ButtonDemo } from "./demos/button";
import { InputTextDemo } from "./demos/input-text";
import { InputNumberDemo } from "./demos/input-number";
import { DropdownDemo } from "./demos/dropdown";
import { CheckboxDemo } from "./demos/checkbox";
import { CalendarDemo } from "./demos/calendar";
import { DialogDemo } from "./demos/dialog";
import { CardDemo } from "./demos/card";
import { DataTableDemo } from "./demos/data-table";
import { TabViewDemo } from "./demos/tab-view";

const demos: Record<string, ComponentType> = {
  "button": ButtonDemo,
  "input-text": InputTextDemo,
  "input-number": InputNumberDemo,
  "dropdown": DropdownDemo,
  "checkbox": CheckboxDemo,
  "calendar": CalendarDemo,
  "dialog": DialogDemo,
  "card": CardDemo,
  "data-table": DataTableDemo,
  "tab-view": TabViewDemo,
};

function getInitialId(): string {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (hash && demos[hash]) return hash;
  return componentRegistry[0]!.id;
}

export function UIKit() {
  const [activeId, setActiveId] = useState<string>(getInitialId);

  const grouped = useMemo(() => {
    const map = new Map<ComponentMeta["category"], ComponentMeta[]>();
    for (const c of componentRegistry) {
      if (!map.has(c.category)) map.set(c.category, []);
      map.get(c.category)!.push(c);
    }
    return [...map.entries()];
  }, []);

  const active = componentRegistry.find((c) => c.id === activeId) ?? componentRegistry[0]!;
  const ActiveDemo = demos[active.id] ?? (() => <p>Demo missing.</p>);

  const select = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#/${id}`);
  };

  return (
    <div className="ui-kit">
      <aside className="ui-kit__sidebar">
        <div className="ui-kit__brand">
          <span className="ui-kit__brand-mark">UI</span>
          <div>
            <div className="ui-kit__brand-title">@repo/ui kit</div>
            <div className="ui-kit__brand-sub">Dev-only playground</div>
          </div>
        </div>

        <nav className="ui-kit__nav">
          {grouped.map(([category, items]) => (
            <div key={category} className="ui-kit__nav-group">
              <div className="ui-kit__nav-label">{category}</div>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`ui-kit__nav-item${item.id === active.id ? " is-active" : ""}`}
                      onClick={() => select(item.id)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <a href="/" className="ui-kit__back">← Back to app</a>
      </aside>

      <main className="ui-kit__main">
        <header className="ui-kit__header">
          <div className="ui-kit__eyebrow">{active.category}</div>
          <h1>{active.name}</h1>
          <p>{active.description}</p>
          <code className="ui-kit__import">{`import { ${active.name} } from "@repo/ui/${active.id}";`}</code>
        </header>
        <div className="ui-kit__canvas">
          <ActiveDemo />
        </div>
      </main>
    </div>
  );
}
