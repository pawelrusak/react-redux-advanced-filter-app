import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

type UserTableRootProps = {
  children?: React.ReactNode;
};

export function UsersTableRoot(props: UserTableRootProps) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          {props.children}
        </Table>
      </TableContainer>
    </Paper>
  );
}
