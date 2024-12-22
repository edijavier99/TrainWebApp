import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../tasdata-table-column-header";
import { DataTableRowActionsclients } from "../rows/DataTableRowActionsclients";
import { clientSchema } from "../../data/schema";

export type Client = z.infer<typeof clientSchema>;
// Definir las columnas correctamente
export const ClientsColumn: ColumnDef<Client>[] = [
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
    accessorKey: "firstName", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => (
      <div className="font-medium truncate">{row.original.firstName}</div>
    ),
  },
  {
    accessorKey: "lastName", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => (
      <div className="font-medium truncate">{row.original.lastName}</div>
    ),
  },
  {
    accessorKey: "email", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="truncate text-sm text-gray-500">{row.original.email}</div>
    ),
  },
  {
    accessorKey: "joinedDate", // Se usa "accessorKey" para acceder al valor
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Joined Date" />
    ),
    cell: ({ row }) => (
      <div className="truncate text-sm text-gray-500">{row.original.joinedDate}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActionsclients row={row} />,
  },
];