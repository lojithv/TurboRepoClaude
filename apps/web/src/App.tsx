import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import type { HelloResponse } from "@repo/shared";

export function App() {
  const [data, setData] = useState<HelloResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHello = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/hello");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData((await res.json()) as HelloResponse);
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHello();
  }, []);

  return (
    <main className="app">
      <h1>Turborepo + React + Vite + NestJS</h1>
      <Card title="API status" className="p-mb-3">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
        {data && (
          <p>
            {data.message} <br />
            <small>at {data.timestamp}</small>
          </p>
        )}
        <Button
          label="Refetch"
          icon="pi pi-refresh"
          loading={loading}
          onClick={fetchHello}
        />
      </Card>
    </main>
  );
}
