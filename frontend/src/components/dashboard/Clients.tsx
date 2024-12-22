import { ClientsColumn } from "../dataTable/components/columns/ClientsColumn";
import { DataTable } from "../dataTable/components/data-table";
import { z } from "zod";
import { clientSchema } from "../dataTable/data/schema";
import { orderStatus } from "../dataTable/data/data";

// Define 3 dummy users directly as JavaScript objects
// Define 3 dummy users with an id property
const users = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      joinedDate: "2023-01-15",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      joinedDate: "2023-02-20",
    },
    {
      id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alicejohnson@example.com",
      joinedDate: "2023-03-10",
    },
  ];
  
// Validate the users data using zod and the client schema
const parsedUsers = z.array(clientSchema).parse(users);

const filterOptions = [
    { column: "firstName", title: "Status", options: orderStatus},
  ];


const AdminClients = () =>  {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 px-[20px] py-4 md:flex">
      {/* Pass parsed users data to the DataTable */}
      <h2 className="text-gray-500 text-xl">Clients </h2>
      <hr/>
      <DataTable data={parsedUsers} filterOptions={filterOptions} columns={ClientsColumn} />
    </div>
  );
}

export default AdminClients
