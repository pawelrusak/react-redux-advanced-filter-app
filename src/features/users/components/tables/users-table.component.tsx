import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { UsersTableRoot } from "@/features/users/components/tables/user-table-root.component";
import { UsersTableHead } from "@/features/users/components/tables/users-table-head.component";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { HighlightTableCell } from "@/features/users/components/tables/users-table.styled";

import type { UserBase, UserId } from "@/features/users/users.types";

type UserRowData = UserBase & UserId;

type UsersTableProps = {
  users: UserRowData[];
  highlightColumn?: keyof UserBase;
};

export function UsersTable(props: UsersTableProps) {
  return (
    <UsersTableRoot>
      <UsersTableHead highlightColumn={props.highlightColumn} />
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
                isHighlighted={props.highlightColumn === BASE_USER_KEY.USERNAME}
              >
                {user.username}
              </HighlightTableCell>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.EMAIL}
              >
                {user.email}
              </HighlightTableCell>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.PHONE}
              >
                {user.phone}
              </HighlightTableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </UsersTableRoot>
  );
}
