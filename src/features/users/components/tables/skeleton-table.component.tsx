import TableBody from "@mui/material/TableBody";
import Skeleton from "@mui/material/Skeleton";
import TableRow from "@mui/material/TableRow";
import { UsersTableRoot } from "@/features/users/components/tables/user-table-root.component";
import { UsersTableHead } from "@/features/users/components/tables/users-table-head.component";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { HighlightTableCell } from "@/features/users/components/tables/users-table.styled";
import { getSequentialArray } from "@/shared/utils";

import type { UserBase } from "@/features/users/users.types";

type UsersTableProps = {
  highlightColumn?: keyof UserBase;
  numberOfRow?: number;
};

export function SkeletonUsersTable(props: UsersTableProps) {
  const numberOfRows = props.numberOfRow ?? 10;

  return (
    <UsersTableRoot>
      <UsersTableHead highlightColumn={props.highlightColumn} />
      <TableBody>
        {getSequentialArray(numberOfRows).map((index) => {
          return (
            <TableRow hover key={index}>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.NAME}
              >
                <Skeleton variant="text" />
              </HighlightTableCell>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.USERNAME}
              >
                <Skeleton variant="text" />
              </HighlightTableCell>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.EMAIL}
              >
                <Skeleton variant="text" />
              </HighlightTableCell>
              <HighlightTableCell
                isHighlighted={props.highlightColumn === BASE_USER_KEY.PHONE}
              >
                <Skeleton variant="text" />
              </HighlightTableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </UsersTableRoot>
  );
}
