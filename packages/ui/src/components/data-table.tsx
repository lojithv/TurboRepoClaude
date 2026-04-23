import { DataTable as PrimeDataTable, DataTableProps as PrimeDataTableProps, DataTableValueArray } from "primereact/datatable";
export { Column } from "primereact/column";

export type DataTableProps<T extends DataTableValueArray> = PrimeDataTableProps<T>;

export function DataTable<T extends DataTableValueArray>({ className, ...props }: DataTableProps<T>) {
  return (
    <PrimeDataTable
      className={["repo-ui-data-table", className].filter(Boolean).join(" ")}
      {...(props as PrimeDataTableProps<T>)}
    />
  );
}
