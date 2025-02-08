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
import { ArrowUpDown, Eye, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import Link from "next/link"
import { formatDateToString } from "@/lib/globals"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"

  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { useAllContext } from "@/hooks/useContextHook"

// import { isDesktop } from "@/hooks/use-media-query"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import { encode } from "punycode"



export default function GalleryImageTable({data}: {data: GalleryCategoryType[]}) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { toast } = useToast()
  const { addCategory, category, clearCategories } = useAllContext()
  const [singleCategory, setSingleCategory] = React.useState<GalleryCategoryType | undefined>(undefined)
  const [open, setOpen] = React.useState<boolean>(false);
//   const deleteCategory = async (id: string) => {
//     try{
//       const response = await axios.delete(`/api/category/${id}`,)
//       toast({
//         description: response.data.message,
//         variant: "success"
//       })
      
//       const updatedCategories = category.filter((item) => item.id !== id)
//       clearCategories();
//       updatedCategories.forEach((category: GalleryCategoryType) => addCategory(category));
  
//     }catch(error:any){
//         toast({
//           description: error.response.data.message,
//           variant: "destructive"
//       })
//     }
//   }

  const getSingleCategory = async (id: string) => {
    try{
      const response = await axios.get(`/api/galleryCategory/${id}`,)
      console.log("cat", response.data)
      setSingleCategory(response.data)
      setOpen(true); 
      
    }catch(error:any){
        toast({
          description: error.response.data.message,
          variant: "destructive"
      })
    }
  }
  
   const columns: ColumnDef<GalleryCategoryType>[] = [
      {
        accessorKey: "subtitle",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="capitalize text-[#003366] hover:underline">{row.getValue("subtitle")} </div>
        ),
      },
      {
        accessorKey: "userId",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Author
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="capitalize text-xs">{row.getValue("userId")}</div>,
      },
      {
        accessorKey: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Description
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => 
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <div className="capitalize truncate">
                {(row.getValue("title") as unknown as string)?.slice(0, 14)}...
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {row.getValue("title")}
            </TooltipContent>
          </Tooltip>
    
      },
      {
        accessorKey: "createdAt",
        header: () => <div className="text-right">Created</div>,
        cell: ({ row }) => {
    
          return <div className="text-right font-medium text-xs">Published at <span className="">{formatDateToString(row.getValue("createdAt"))}</span></div>
        },
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const id = row.original.id
    
          return (
            <>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem className="flex gap-2 bg-seep-color hover:!bg-blue-500 p-1 !text-white cursor-pointer" onSelect={(event) => event.preventDefault()} onClick={() =>  getSingleCategory(id)}><Eye/> View Images</DropdownMenuItem>
                <DropdownMenuSeparator />
                
                {/* <Dialog>
                    <DialogTrigger asChild>
                            <DropdownMenuItem onSelect={(event) => event.preventDefault()}>Delete Category</DropdownMenuItem>
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
                        <Button type='button' variant={'destructive'} onClick={() => deleteCategory(id)} className='border-0'>Delete</Button>
    
                    </div>
                    </DialogContent>
                    
                </Dialog> */}
    
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto no-scrollbar">
                <DialogHeader>
                    <DialogTitle>Images</DialogTitle>
                    <DialogDescription>Modify the category details below.</DialogDescription>
                </DialogHeader>
                    {singleCategory?.galleryImage.map((item, index) => (
                        <Image key={`${item.image}-${index}`} src={`${encodeURI(item.image)}`} width={500} height={200} alt={item.description} className="size-20"/>
                    ))}
                </DialogContent>
                
            </Dialog>
            {/* {isDesktop ?
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto no-scrollbar">
              <DialogHeader>
                <DialogTitle>Edit Category</DialogTitle>
                <DialogDescription>Modify the category details below.</DialogDescription>
              </DialogHeader>
                <CategoryForm data={singleCategory} setOpen={setOpen}/>
              </DialogContent>
              
          </Dialog>
            :
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                
              </DrawerTrigger>
              <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                <div className="z-[51]">
                <DrawerHeader className="!text-center">
                <DrawerTitle>Edit Category</DrawerTitle>
                  <DrawerDescription>
                  Modify the category details below.
                  </DrawerDescription>
                </DrawerHeader>
                <CategoryForm data={singleCategory} setOpen={setOpen}/>
                <DrawerFooter className="pt-2">
                </DrawerFooter>

                </div>
              </DrawerContent>
            </Drawer>
            } */}
            </>
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
    <div className="w-full">
      <div className="flex items-center py-4">

        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

      </div>
      <div className="rounded-md border bg-white h-96 overflow-auto">
        <Table className="table-fixed">
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
          <TableBody >
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
