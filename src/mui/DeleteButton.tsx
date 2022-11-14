import { DeleteOutlined as DeleteIcon } from "@mui/icons-material";
import { IconButton, IconButtonProps } from "@mui/material";

export default function DeleteButton(props: IconButtonProps) {
  return (
    <IconButton type="button" color="error" {...props}>
      <DeleteIcon />
    </IconButton>
  );
}
