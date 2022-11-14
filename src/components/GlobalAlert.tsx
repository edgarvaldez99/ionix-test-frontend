import { Alert, Snackbar } from "@mui/material";
import { useAlertContext } from "../contexts/alert-context";

const GlobalAlert = () => {
  const { alertMessage, setAlertMessage } = useAlertContext();
  const openAlert = !!alertMessage;
  const handleSnackbarClose = () => {
    setAlertMessage("");
  };
  return (
    <Snackbar
      open={openAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default GlobalAlert;
