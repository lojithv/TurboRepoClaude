import { Button } from "@repo/ui/button";

export function ButtonDemo() {
  return (
    <div className="demo-grid">
      <section>
        <h3>Severities</h3>
        <div className="demo-row">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
          <Button label="Danger" severity="danger" />
        </div>
      </section>
      <section>
        <h3>Outlined / Text</h3>
        <div className="demo-row">
          <Button label="Outlined" outlined />
          <Button label="Text" text />
          <Button label="Link" link />
        </div>
      </section>
      <section>
        <h3>Icons & loading</h3>
        <div className="demo-row">
          <Button label="Save" icon="pi pi-check" />
          <Button icon="pi pi-trash" severity="danger" />
          <Button label="Loading" loading />
        </div>
      </section>
    </div>
  );
}
