import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BASE_USER_KEY } from "@/features/users/users.constants";
import { EN } from "@/features/users/users.translations";
import { HighlightTableCell } from "@/features/users/components/tables/users-table.styled";

import type { UserBase } from "@/features/users/users.types";

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

type UsersTableHeadProps = {
  highlightColumn?: keyof UserBase;
};

export function UsersTableHead(props: UsersTableHeadProps) {
  return (
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
  );
}
