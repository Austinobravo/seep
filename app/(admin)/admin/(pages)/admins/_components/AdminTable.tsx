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
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"
// const data: TableDataType[] = [
//   {
//     id: "m5gr84i9",
//     admin_id: "Nwankwo Joy",
//     phone: "+19444949494",
//     email: "joy@yahoo.com",
//     joined_date: "30/8/2024",
//     status: "Active"
//   },
//   {
//     id: "3u1reuv4",
//     admin_id: "Gift Happiness",
//     phone: "+19444949494",
//     email: "Gift@yahoo.com",
//     joined_date: "30/8/2024",
//     status: "Active"
//   },
//   {
//     id: "derv1ws0",
//     admin_id: "Simon Sinek",
//     phone: "+19444949494",
//     email: "simon@yahoo.com",
//     joined_date: "30/8/2024",
//     status: "Inactive"
//   },
//   {
//     id: "5kma53ae",
//     admin_id: "Steven Doe",
//     phone: "+19444949494",
//     email: "steve@yahoo.com",
//     joined_date: "30/8/2024",
//     status: "Active"
//   },
//   {
//     id: "bhqecj4p",
//     admin_id: "Carmichael",
//     phone: "+19444949494",
//     email: "michael@yahoo.com",
//     joined_date: "30/8/2024",
//     status: "Inactive"
//   },
// ]

// export type TableDataType = {
//   id: string
//   admin_id: string
//   phone: string
//   email: string
//   joined_date: string
//   status: 'Active' | 'Inactive'
// }


export function AdminTable({data}: {data: UserType[]}) {
  const [isBlockedDialogOpen, setIsBlockedDialogOpen] = React.useState<boolean>(false)
  const [BlockedDialogText, setBlockedDialogText] = React.useState<string>("")
  const { toast } = useToast()
  const handleNavigating = (text: string) => {
    setBlockedDialogText(text)
    setIsBlockedDialogOpen(!isBlockedDialogOpen)
  }

  const handleBlockUser = async (id: string) => {
    try{
      const response = await axios.patch('/api/superuser/users/', JSON.stringify(id))
      if(response.status === 200){
        toast({description: response.data.message, variant: "success"})
        setIsBlockedDialogOpen(!isBlockedDialogOpen)

      }

    }catch(error:any){
      console.error("Error here", error)
      toast({description: error.response.data.message, variant: "destructive"})
      

    }
    
  }
  const columns: ColumnDef<UserType>[] = [
    {
      id: "number",
      header: "User NO",
      cell: ({ row }) => (
        <div className="capitalize">{row.index + 1}</div>
      ),
    },
    {
      accessorKey: "username",
      header: "Admin ID",
      cell: ({ row }) => (
        <Link href={`/admin/admins/${row.original.id}`} className="capitalize text-seep-color hover:underline-offset-4 hover:underline">{row.getValue("username")}</Link>
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
        <div className="">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Joined Date",
      cell: ({ row }) => (
        <div className="capitalize">{new Date(row.getValue("createdAt")).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"} )}</div>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Status",
      cell: ({ row }) => {
          const isActive = row.original.isActive
      return (
        <div className={`capitalize border rounded-full p-2 flex items-center justify-evenly gap-1`}>
          <span className={`${isActive ? 'bg-green-500' : 'bg-red-500'} p-1.5 rounded-full`}></span>
          <p>{isActive ? "Active" : "Inactive"}</p>
          </div>
      )},
    },
    {
      accessorKey: "isBlocked",
      header: "Block User",
      cell: ({ row }) => {
          const isActive = row.original.isBlocked
      return (
        <>
        <Switch checked={isActive} onCheckedChange={()=> isActive ? handleNavigating('Do you want to unblock this user?') : handleNavigating('Do you want to block this user?')}/>
        <Dialog open={isBlockedDialogOpen} onOpenChange={setIsBlockedDialogOpen}>
                <DialogTrigger asChild>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{BlockedDialogText}</DialogTitle>
                    <DialogDescription>
                    This is a permanent action. Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <div className='flex gap-5 w-fit ml-auto'>
                    <DialogClose>
                        Cancel
                    </DialogClose>
                    <Button type='button' variant={isActive ? 'default' : 'destructive'} onClick={() => handleBlockUser(row.original.id)} className='border-0'>Proceed</Button>

                </div>
                </DialogContent>
                
            </Dialog>
        </>
      )},
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const id = row.original.id
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
              <Dialog>
                  <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={(event)=> event.preventDefault()} className="flex gap-2 bg-seep-color hover:!bg-blue-500 p-1 !text-white cursor-pointer">
                      <Trash2/>
                      <span>Delete Admin</span> 
                      </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                  <DialogHeader>
                      <DialogTitle>Delete this?</DialogTitle>
                      <DialogDescription>
                      This is a permanent action. Are you sure?
                      </DialogDescription>
                  </DialogHeader>
                  <div className='flex gap-5 w-fit ml-auto'>
                      <DialogClose>
                          Cancel
                      </DialogClose>
                      <Button type='button' variant={'destructive'} onClick={() => {}} className='border-0'>Delete</Button>
  
                  </div>
                  </DialogContent>
                  
              </Dialog>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
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
