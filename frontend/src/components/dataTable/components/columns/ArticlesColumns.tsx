import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../tasdata-table-column-header";
import { articleSchema } from "../../data/schema";
import { DataTableRowActionsArticles } from "../rows/DataTableRowActionsArticles";

export type Client = z.infer<typeof articleSchema>;
// Definir las columnas correctamente


export const ArticlesColumns: ColumnDef<Client>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Article Title" />
    ),
    cell: ({ row }) => (
      <div className="font-medium truncate">{row.original.title}</div>
    ),
  },
  {
    accessorKey: "category", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => (
      <div className="font-medium truncate">{row.original.category}</div>
    ),
  },
  {
    accessorKey: "published_date", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published Date" />
    ),
    cell: ({ row }) => (
      <div className="truncate text-sm text-gray-500">{row.original.published_date}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActionsArticles row={row} />,
  },
];