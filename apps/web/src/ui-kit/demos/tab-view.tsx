import { TabPanel, TabView } from "@repo/ui/tab-view";

export function TabViewDemo() {
  return (
    <div className="demo-grid">
      <section>
        <h3>Basic tabs</h3>
        <TabView>
          <TabPanel header="Overview" leftIcon="pi pi-home">
            <p style={{ marginTop: 0 }}>At-a-glance metrics for the current workspace.</p>
          </TabPanel>
          <TabPanel header="Activity" leftIcon="pi pi-list">
            <p style={{ marginTop: 0 }}>Recent events from the audit log.</p>
          </TabPanel>
          <TabPanel header="Settings" leftIcon="pi pi-cog">
            <p style={{ marginTop: 0 }}>Configure workspace-level preferences.</p>
          </TabPanel>
        </TabView>
      </section>
    </div>
  );
}
