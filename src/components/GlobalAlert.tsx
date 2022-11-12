import { Alert, Snackbar } from "@mui/material";
import { useRefreshContext } from "../contexts/refresh-context";

const GlobalAlert = () => {
    const {openAlert, setOpenAlert, abmAlert} = useRefreshContext();
    const handleSnackbarClose = () => {
        setOpenAlert(false);
      };
    return (
        <Snackbar open={openAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
              {abmAlert}
            </Alert>
        </Snackbar>
    );
};

export default GlobalAlert;
