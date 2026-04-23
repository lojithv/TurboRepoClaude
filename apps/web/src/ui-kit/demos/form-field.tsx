import { useState } from "react";
import { FormField } from "@repo/ui/form-field";
import { InputText } from "@repo/ui/input-text";
import { Dropdown } from "@repo/ui/dropdown";

const timezones = [
  { label: "UTC", value: "utc" },
  { label: "America / New_York", value: "nyc" },
  { label: "Europe / London", value: "ldn" },
];

export function FormFieldDemo() {
  const [email, setEmail] = useState("not-an-email");
  const [tz, setTz] = useState<string | null>(null);
  const emailError = email && !/^\S+@\S+\.\S+$/.test(email) ? "Enter a valid email." : "";

  return (
    <div className="demo-grid">
      <section>
        <h3>Label, hint, required, error</h3>
        <div className="demo-stack" style={{ maxWidth: 360 }}>
          <FormField label="Display name" htmlFor="ff-name" required hint="Shown on your profile.">
            <InputText id="ff-name" placeholder="Jane Cooper" />
          </FormField>
          <FormField
            label="Email"
            htmlFor="ff-email"
            required
            error={emailError || undefined}
          >
            <InputText
              id="ff-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              invalid={!!emailError}
            />
          </FormField>
          <FormField label="Timezone" hint="Used for scheduled digests.">
            <Dropdown
              value={tz}
              onChange={(e) => setTz(e.value)}
              options={timezones}
              placeholder="Select a timezone"
            />
          </FormField>
        </div>
      </section>
    </div>
  );
}
