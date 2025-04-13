import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const initialProperties = [
  {
    id: 1,
    name: "Kos 1",
    address: "Malang",
    totalRooms: 90,
  },
];

export default function PropertyPage() {
  // State untuk list properties
  const [properties, setProperties] = useState(initialProperties);
  
  // State untuk dialog tambah
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: "",
    address: "",
    totalRooms: 0
  });
  
  // State untuk dialog edit
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteProperty, setDeleteProperty] = useState(null);

  
  // Fungsi untuk menangani tambah properti
  const handleAddProperty = () => {
    const propertyToAdd = {
      id: properties.length + 1,
      ...newProperty
    };
    
    setProperties([...properties, propertyToAdd]);
    setNewProperty({ name: "", address: "", totalRooms: 0 });
    setOpenAddDialog(false);
  };
  
  // Fungsi untuk membuka dialog edit
  const handleOpenEdit = (property) => {
    setEditingProperty(property);
    setOpenEditDialog(true);
  };

  const handleOpenDelete = (property) => {
    setDeleteProperty(property);
    setOpenDeleteDialog(true);
  }
  
  // Fungsi untuk menangani edit properti
  const handleEditProperty = () => {
    // setProperties(
    //   properties.map((property) => 
    //     property.id === editingProperty.id ? editingProperty : property
    //   )
    // );
    setOpenEditDialog(false);
  };
  
  // Fungsi untuk menangani hapus properti
  const handleDeleteProperty = (propertyId) => {
    // setProperties(properties.filter((property) => property.id !== propertyId));
  };

  return (
    <div className="m-2 flex flex-col gap-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Properties</CardTitle>
          
          {/* Dialog Tambah Property */}
          <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Property</DialogTitle>
                <DialogDescription>
                  Add a new property to the list.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="add-name" className="text-right">
                    Name
                  </Label>
                  <Input 
                    id="add-name" 
                    className="col-span-3" 
                    value={newProperty.name}
                    onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="add-address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="add-address"
                    className="col-span-3"
                    value={newProperty.address}
                    onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="add-rooms" className="text-right">
                    Total Rooms
                  </Label>
                  <Input
                    id="add-rooms"
                    type="number"
                    className="col-span-3"
                    value={newProperty.totalRooms}
                    onChange={(e) => setNewProperty({...newProperty, totalRooms: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={handleAddProperty}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          {/* Dialog Edit Property */}
          <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Property</DialogTitle>
                <DialogDescription>
                  Edit property details.
                </DialogDescription>
              </DialogHeader>
              {editingProperty && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input 
                      id="edit-name" 
                      className="col-span-3" 
                      // value={editingProperty.name}
                      // onChange={(e) => setEditingProperty({...editingProperty, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-address" className="text-right">
                      Address
                    </Label>
                    <Input
                      id="edit-address"
                      className="col-span-3"
                      // value={editingProperty.address}
                      // onChange={(e) => setEditingProperty({...editingProperty, address: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-rooms" className="text-right">
                      Total Rooms
                    </Label>
                    <Input
                      id="edit-rooms"
                      type="number"
                      className="col-span-3"
                      // value={editingProperty.totalRooms}
                      // onChange={(e) => setEditingProperty({...editingProperty, totalRooms: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button type="button" onClick={handleEditProperty}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog Delete Property */}
          <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Delete Property</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this property?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="button" variant="destructive" onClick={() => handleDeleteProperty(deleteProperty.id)}>Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Action</TableHead>
                <TableHead>No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Total Rooms</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property, index) => (
                <TableRow key={property.id}>
                  <TableCell className="flex gap-2 items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleOpenEdit(property)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="icon"
                      onClick={() => handleOpenDelete(property)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{property.name}</TableCell>
                  <TableCell>{property.address}</TableCell>
                  <TableCell>{property.totalRooms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}