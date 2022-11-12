import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";

const CustomLoadingButton = (props: any) => {
  return (
    <LoadingButton
      type="submit"
      size="medium"
      loading={props.loading}
      loadingIndicator={<CircularProgress sx={{ color: "white" }} size={18} />}
      sx={{
        width: '150px',
        backgroundColor: "#1976d2",
        alignSelf: "center",
        marginTop: '20px',
        textTransform: "none",
        color: "white",
        "&:hover": {
          backgroundColor: "#1565c0",
          boxShadow: "none",
        },
      }}
    >
      {props.children}
    </LoadingButton>
  );
};
export default CustomLoadingButton;
