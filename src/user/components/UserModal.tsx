import { Edit as EditIcon } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import { modalStyle } from '../../utils/modal-styles';
import UserForm from './UserForm';
import CreateButton from '../../mui/CreateButton';

export default function UserModal ({ id }: { id?: number }) {
  const isCreate = !id;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalTitle = isCreate ? 'Create User' : 'Edit User';

  return (
    <div>
      <Button onClick={handleOpen}>
        { isCreate ? <CreateButton/> : <EditIcon />}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography>{modalTitle}</Typography>
          <UserForm id={id} onSubmit={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
