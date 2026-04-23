import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";

export function CardDemo() {
  return (
    <div className="demo-grid">
      <section>
        <h3>Basic</h3>
        <Card title="Monthly report" subTitle="April 2026" style={{ maxWidth: 380 }}>
          <p style={{ marginTop: 0 }}>Revenue up 12% vs. last month, churn down 1.4 points.</p>
        </Card>
      </section>
      <section>
        <h3>With footer</h3>
        <Card
          title="New feature"
          subTitle="Beta"
          style={{ maxWidth: 380 }}
          footer={
            <div className="demo-row">
              <Button label="Dismiss" severity="secondary" text />
              <Button label="Try it" icon="pi pi-arrow-right" iconPos="right" />
            </div>
          }
        >
          <p style={{ marginTop: 0 }}>We shipped real-time collaboration on shared boards. Give it a spin.</p>
        </Card>
      </section>
    </div>
  );
}
