"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

const data: TableDataType[] = [
  {
    id: "m5gr84i9",
    admin_id: "Nwankwo Joy",
    phone: "+19444949494",
    email: "joy@yahoo.com",
    joined_date: "30/8/2024",
    status: "Active"
  },
  {
    id: "3u1reuv4",
    admin_id: "Gift Happiness",
    phone: "+19444949494",
    email: "Gift@yahoo.com",
    joined_date: "30/8/2024",
    status: "Active"
  },
  {
    id: "derv1ws0",
    admin_id: "Simon Sinek",
    phone: "+19444949494",
    email: "simon@yahoo.com",
    joined_date: "30/8/2024",
    status: "Inactive"
  },
  {
    id: "5kma53ae",
    admin_id: "Steven Doe",
    phone: "+19444949494",
    email: "steve@yahoo.com",
    joined_date: "30/8/2024",
    status: "Active"
  },
  {
    id: "bhqecj4p",
    admin_id: "Carmichael",
    phone: "+19444949494",
    email: "michael@yahoo.com",
    joined_date: "30/8/2024",
    status: "Inactive"
  },
]

export type TableDataType = {
  id: string
  admin_id: string
  phone: string
  email: string
  joined_date: string
  status: 'Active' | 'Inactive'
}

export const columns: ColumnDef<TableDataType>[] = [
  {
    id: "number",
    header: "User NO",
    cell: ({ row }) => (
      <div className="capitalize">{row.index + 1}</div>
    ),
  },
  {
    accessorKey: "admin_id",
    header: "Admin ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("admin_id")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Emails",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "joined_date",
    header: "Joined Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("joined_date")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const isActive = row.getValue("status") === "Active"
    return (
      <div className={`capitalize border rounded-full p-2 flex items-center justify-evenly gap-1`}>
        <span className={`${isActive ? 'bg-green-500' : 'bg-red-500'} p-1.5 rounded-full`}></span>
        <p>{row.getValue("status")}</p>
        </div>
    )},
  },
  {
    accessorKey: "status",
    header: "Block User",
    cell: ({ row }) => {
        const isActive = row.getValue("status") === "Active"
    return (
      <Switch checked={isActive} onCheckedChange={()=> isActive ? confirm('Do you want to unblock this user?') : confirm('Do you want to block this user?')}/>
    )},
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal size={20}/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => confirm('Do you want to delete this user?')}
              className="flex gap-2 seep-bg-color hover:!bg-blue-500 p-1 !text-white cursor-pointer"
            >
            <Trash2/>
            <span>Delete Admin</span> 
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function AdminTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full !bg-white p-4 rounded-lg">
      <div className="flex items-center py-4 sm:flex-wrap gap-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu >
          <DropdownMenuTrigger asChild className="">
            <Button variant="outline" className="md:ml-auto">
              Select <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
