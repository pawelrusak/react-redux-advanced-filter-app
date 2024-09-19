import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { EN } from "@/features/users/components/components.translations";

type FetchUsesAlertProps = {
  onRefreshClick: () => void;
};

export function FetchUsesAlert(props: FetchUsesAlertProps) {
  return (
    <Box style={{ width: "100vh", maxWidth: "30rem" }}>
      <Alert
        severity="error"
        variant="outlined"
        style={{ marginBottom: "1rem", justifyContent: "start" }}
      >
        <AlertTitle align="left">{EN.USER_FETCH_ALERT.TITLE}</AlertTitle>
        {EN.USER_FETCH_ALERT.BODY}
      </Alert>
      <Button variant="outlined" onClick={props.onRefreshClick}>
        {EN.USER_FETCH_ALERT.REFRESH_BUTTON}
      </Button>
    </Box>
  );
}
