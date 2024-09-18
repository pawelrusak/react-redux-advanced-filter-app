import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { UserBase, UserId } from "@/features/users/users.types";

type Field = keyof UserBase;

interface Column {
  field: Field;
  label: string;
  minWidth?: number;
}

const columns: Column[] = [
  {
    field: "name",
    label: "Name",
    minWidth: 150,
  },
  {
    field: "username",
    label: "User name",
  },
  {
    field: "email",
    label: "Email",
  },
  {
    field: "phone",
    label: "Phone",
  },
];

type UserRowData = UserBase & UserId;

type UsersTableProps = {
  users: UserRowData[];
};

export function UsersTable(props: UsersTableProps) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => {
              return (
                <TableRow hover key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
