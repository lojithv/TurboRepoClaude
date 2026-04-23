import { FormEvent, useState } from "react";
import { Button } from "@repo/ui/button";
import { Calendar } from "@repo/ui/calendar";
import { Checkbox } from "@repo/ui/checkbox";
import { Dropdown } from "@repo/ui/dropdown";
import { FormField } from "@repo/ui/form-field";
import { InputText } from "@repo/ui/input-text";
import { PopupForm } from "@repo/ui/popup-form";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

interface UserDraft {
  name: string;
  email: string;
  role: string | null;
  startsAt: Date | null | undefined;
  invite: boolean;
}

const blank: UserDraft = {
  name: "",
  email: "",
  role: null,
  startsAt: null,
  invite: true,
};

export function PopupFormDemo() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [draft, setDraft] = useState<UserDraft>(blank);
  const [lastCreated, setLastCreated] = useState<string>("");

  const set = <K extends keyof UserDraft>(key: K, value: UserDraft[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const emailError =
    draft.email && !/^\S+@\S+\.\S+$/.test(draft.email) ? "Enter a valid email" : "";

  const canSubmit = Boolean(
    draft.name.trim() && draft.email && !emailError && draft.role,
  );

  const close = () => {
    setOpen(false);
    setDraft(blank);
  };

  const submit = async (_e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setLastCreated(
      `${draft.name} (${draft.role})${draft.invite ? " — invite sent" : ""}`,
    );
    close();
  };

  return (
    <div className="demo-grid">
      <section>
        <h3>Modal form with submit / cancel flow</h3>
        <p style={{ margin: "0 0 0.75rem", color: "#6b7280" }}>
          The footer buttons, loading state, ESC / close handling and form wiring are
          built into <code>PopupForm</code>. You just describe the body.
        </p>
        <div className="demo-inline">
          <Button label="Add user" icon="pi pi-plus" onClick={() => setOpen(true)} />
          {lastCreated && (
            <span style={{ color: "#16a34a" }}>
              <i className="pi pi-check" style={{ marginRight: 6 }} />
              Created {lastCreated}
            </span>
          )}
        </div>

        <PopupForm
          visible={open}
          onHide={close}
          onSubmit={submit}
          submitting={submitting}
          submitDisabled={!canSubmit}
          header="Add user"
          submitLabel="Create user"
          submitIcon="pi pi-check"
          style={{ width: "28rem" }}
        >
          <FormField label="Full name" htmlFor="pf-name" required>
            <InputText
              id="pf-name"
              value={draft.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Jane Cooper"
            />
          </FormField>

          <FormField
            label="Email"
            htmlFor="pf-email"
            required
            error={emailError || undefined}
          >
            <InputText
              id="pf-email"
              value={draft.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="jane@example.com"
              invalid={!!emailError}
            />
          </FormField>

          <FormField label="Role" required>
            <Dropdown
              value={draft.role}
              onChange={(e) => set("role", e.value)}
              options={roles}
              placeholder="Select a role"
            />
          </FormField>

          <FormField label="Starts on" hint="Optional — defaults to today.">
            <Calendar<"single">
              value={draft.startsAt}
              onChange={(e) => set("startsAt", e.value)}
              showIcon
            />
          </FormField>

          <FormField>
            <label className="demo-inline" style={{ cursor: "pointer" }}>
              <Checkbox
                checked={draft.invite}
                onChange={(e) => set("invite", !!e.checked)}
              />
              <span>Send invite email on create</span>
            </label>
          </FormField>
        </PopupForm>
      </section>
    </div>
  );
}
