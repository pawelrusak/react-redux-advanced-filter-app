import { styled, lighten, alpha } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

import type { TableCellProps } from "@mui/material/TableCell";

type HighlightTableCellProps = TableCellProps & {
  isHighlighted?: boolean;
  isTableHeadCell?: boolean;
};

const HighlightTableCell = styled(TableCell)<HighlightTableCellProps>(
  ({ theme, isHighlighted, isTableHeadCell }) => {
    if (isHighlighted && isTableHeadCell) {
      return {
        backgroundColor: lighten(theme.palette.background.paper, 0.05),
      };
    }

    if (isHighlighted) {
      return {
        backgroundColor: alpha(theme.palette.action.hover, 0.06),
      };
    }
  }
);

export { HighlightTableCell };
