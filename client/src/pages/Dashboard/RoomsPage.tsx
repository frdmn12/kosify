import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  // TableCaption,
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

const initialRooms = [
  {
    id: 1,
    name: "Kos 1",
    address: "Malang",
    totalRooms: 90,
  },
];

export default function RoomsPage() {
  // State untuk list rooms
  const [rooms, setRooms] = useState(initialRooms);
  
  // State untuk dialog tambah
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newRoom, setNewRoom] = useState({
    name: "",
    address: "",
    totalRooms: 0
  });
  
  // State untuk dialog edit
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteRoom, setDeleteRoom] = useState(null);

  
  // Fungsi untuk menangani tambah properti
  const handleAddRooms = () => {
    const roomToAdd = {
      id: rooms.length + 1,
      ...newRoom
    };
    
    setRooms([...rooms, roomToAdd]);
    setNewRoom({ name: "", address: "", totalRooms: 0 });
    setOpenAddDialog(false);
  };
  
  // Fungsi untuk membuka dialog edit
  const handleOpenEdit = (room) => {
    setEditingRoom(room);
    setOpenEditDialog(true);
  };

  const handleOpenDelete = (room) => {
    setDeleteRoom(room);
    setOpenDeleteDialog(true);
  }
  
  // Fungsi untuk menangani edit properti
  const handleEditRoom = () => {
    // setRooms(
    //   rooms.map((room) => 
    //     room.id === editingRoom.id ? editingRoom : room
    //   )
    // );
    setOpenEditDialog(false);
  };
  
  // Fungsi untuk menangani hapus properti
  const handleDeleteRoom = (roomId) => {
    // setRooms(rooms.filter((room) => room.id !== roomId));
  };

  return (
    <div className="m-2 flex flex-col gap-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Rooms</CardTitle>
          
          {/* Dialog Tambah Room */}
          <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Room</DialogTitle>
                <DialogDescription>
                  Add a new room to the list.
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
                    value={newRoom.name}
                    onChange={(e) => setNewRoom({...newRoom, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="add-address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="add-address"
                    className="col-span-3"
                    value={newRoom.address}
                    onChange={(e) => setNewRoom({...newRoom, address: e.target.value})}
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
                    value={newRoom.totalRooms}
                    onChange={(e) => setNewRoom({...newRoom, totalRooms: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={handleAddRooms}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          {/* Dialog Edit Room */}
          <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Room</DialogTitle>
                <DialogDescription>
                  Edit room details.
                </DialogDescription>
              </DialogHeader>
              {editingRoom && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input 
                      id="edit-name" 
                      className="col-span-3" 
                      // value={editingRoom.name}
                      // onChange={(e) => setEditingRoom({...editingRoom, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-address" className="text-right">
                      Address
                    </Label>
                    <Input
                      id="edit-address"
                      className="col-span-3"
                      // value={editingRoom.address}
                      // onChange={(e) => setEditingRoom({...editingRoom, address: e.target.value})}
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
                      // value={editingRoom.totalRooms}
                      // onChange={(e) => setEditingRoom({...editingRoom, totalRooms: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button type="button" onClick={handleEditRoom}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog Delete Room */}
          <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Delete Room</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this room?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="button" variant="destructive" onClick={() => handleDeleteRoom(deleteRoom.id)}>Delete</Button>
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
              {rooms.map((room, index) => (
                <TableRow key={room.id}>
                  <TableCell className="flex gap-2 items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleOpenEdit(room)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="icon"
                      onClick={() => handleOpenDelete(room)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{room.name}</TableCell>
                  <TableCell>{room.address}</TableCell>
                  <TableCell>{room.totalRooms}</TableCell>
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