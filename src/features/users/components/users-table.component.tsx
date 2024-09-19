import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { EN } from "@/features/users/components/components.translations";
import { HighlightTableCell } from "@/features/users/components/users-table.styled";

import type { UserBase, UserId } from "@/features/users/users.types";

type Field = keyof UserBase;

interface Column {
  field: Field;
  label: string;
  minWidth?: number;
}

const columns: Column[] = [
  {
    field: BASE_USER_KEY.NAME,
    label: EN.USER_TABLE.COLUMN_LABEL.NAME,
    minWidth: 150,
  },
  {
    field: BASE_USER_KEY.USERNAME,
    label: EN.USER_TABLE.COLUMN_LABEL.USERNAME,
  },
  {
    field: BASE_USER_KEY.EMAIL,
    label: EN.USER_TABLE.COLUMN_LABEL.EMAIL,
  },
  {
    field: BASE_USER_KEY.PHONE,
    label: EN.USER_TABLE.COLUMN_LABEL.PHONE,
  },
];

type UserRowData = UserBase & UserId;

type UsersTableProps = {
  users: UserRowData[];
  highlightColumn?: keyof UserBase;
};

export function UsersTable(props: UsersTableProps) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <HighlightTableCell
                  key={column.field}
                  style={{ minWidth: column.minWidth }}
                  isTableHeadCell
                  isHighlighted={props.highlightColumn === column.field}
                >
                  {column.label}
                </HighlightTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => {
              return (
                <TableRow hover key={user.id}>
                  <HighlightTableCell
                    isHighlighted={props.highlightColumn === BASE_USER_KEY.NAME}
                  >
                    {user.name}
                  </HighlightTableCell>
                  <HighlightTableCell
                    isHighlighted={
                      props.highlightColumn === BASE_USER_KEY.USERNAME
                    }
                  >
                    {user.username}
                  </HighlightTableCell>
                  <HighlightTableCell
                    isHighlighted={
                      props.highlightColumn === BASE_USER_KEY.EMAIL
                    }
                  >
                    {user.email}
                  </HighlightTableCell>
                  <HighlightTableCell
                    isHighlighted={
                      props.highlightColumn === BASE_USER_KEY.PHONE
                    }
                  >
                    {user.phone}
                  </HighlightTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
