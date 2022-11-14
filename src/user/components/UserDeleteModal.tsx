import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useAlertContext } from "../../contexts/alert-context";
import DeleteButton from "../../mui/DeleteButton";
import { removeDataFromAPI } from "../../utils/api";
import { modalStyle } from "../../utils/modal-styles";

type UserDeleteModalProps = {
  id?: number;
  refresh: () => void;
};

export default function UserDeleteModal({ id, refresh }: UserDeleteModalProps) {
  const [open, setOpen] = React.useState(false);
  const { setAlertMessage } = useAlertContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    setOpen(false);
    removeDataFromAPI(`users/${id}`).then(() => {
      setAlertMessage("User successfully deleted");
      refresh();
    });
  };

  return (
    <>
      <DeleteButton onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography>
            Are you sure you want to delete the user with ID {id}?
          </Typography>
          <Box>
            <Button onClick={handleDelete}>Si</Button>
            <Button onClick={handleClose}>No</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
