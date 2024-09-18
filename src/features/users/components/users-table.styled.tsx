import { styled, alpha } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

import type { TableCellProps } from "@mui/material/TableCell";

type HighlightTableCellProps = TableCellProps & {
  isHighlighted?: boolean;
};

const HighlightTableCell = styled(TableCell)<HighlightTableCellProps>(
  ({ theme, isHighlighted }) => ({
    backgroundColor: isHighlighted
      ? alpha(theme.palette.action.hover, 0.07)
      : "transparent",
  })
);

export { HighlightTableCell };
