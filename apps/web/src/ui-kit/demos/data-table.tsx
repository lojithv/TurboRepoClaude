import { Column, DataTable } from "@repo/ui/data-table";

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const products: Product[] = [
  { code: "P-001", name: "Notebook",       category: "Stationery",   quantity: 24, price: 4.5 },
  { code: "P-002", name: "Mechanical Pen", category: "Stationery",   quantity: 48, price: 12.0 },
  { code: "P-003", name: "USB-C Cable",    category: "Electronics",  quantity: 17, price: 9.9 },
  { code: "P-004", name: "Desk Lamp",      category: "Electronics",  quantity: 6,  price: 39.0 },
  { code: "P-005", name: "Coffee Mug",     category: "Kitchen",      quantity: 30, price: 7.25 },
];

export function DataTableDemo() {
  return (
    <div className="demo-grid">
      <section>
        <h3>Sortable + paginated</h3>
        <DataTable value={products} paginator rows={3} rowsPerPageOptions={[3, 5, 10]} stripedRows>
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column field="quantity" header="Qty" sortable />
          <Column
            field="price"
            header="Price"
            sortable
            body={(row: Product) => `$${row.price.toFixed(2)}`}
          />
        </DataTable>
      </section>
    </div>
  );
}
