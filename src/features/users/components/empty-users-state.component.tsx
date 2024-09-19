import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

import { EN } from "@/features/users/users.translations";

type EmptyUsersStateProps = {
  onSearchResetClick?: () => void;
};

export function EmptyUsersState(props: EmptyUsersStateProps) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        margin: "5rem",
      }}
    >
      <PersonSearchOutlinedIcon style={{ fontSize: "7rem", opacity: "0.3" }} />
      <Typography variant="h5" component="p">
        {EN.EMPTY_USER_STATE.BODY}
      </Typography>
      {props.onSearchResetClick ? (
        <Button
          variant="outlined"
          onClick={props.onSearchResetClick}
          sx={{ m: 3 }}
        >
          {EN.EMPTY_USER_STATE.CTA_BUTTON}
        </Button>
      ) : null}
    </Box>
  );
}
