import { Button } from "@repo/ui/button";
import { Tooltip } from "@repo/ui/tooltip";

export function TooltipDemo() {
  return (
    <div className="demo-grid">
      <section>
        <h3>Positions</h3>
        <Tooltip target=".tooltip-target" />
        <div className="demo-row">
          <Button
            className="tooltip-target"
            label="Top"
            data-pr-tooltip="Tooltip on top"
            data-pr-position="top"
          />
          <Button
            className="tooltip-target"
            label="Right"
            data-pr-tooltip="Tooltip on right"
            data-pr-position="right"
          />
          <Button
            className="tooltip-target"
            label="Bottom"
            data-pr-tooltip="Tooltip on bottom"
            data-pr-position="bottom"
          />
          <Button
            className="tooltip-target"
            label="Left"
            data-pr-tooltip="Tooltip on left"
            data-pr-position="left"
          />
        </div>
      </section>
    </div>
  );
}
