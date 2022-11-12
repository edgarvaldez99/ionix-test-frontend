import { DeleteOutlined as DeleteIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRefreshContext } from '../contexts/refresh-context';
import { removeDataFromAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

type DeleteButtonProps = {
  id: number
}
export default function DeleteButton({ id }: DeleteButtonProps) {
  const navigate = useNavigate()
  const {setOpenAlert, setUpdated, setAbmAlert} = useRefreshContext();
  const handleClick = () => {
    removeDataFromAPI(`users/${id}`).then(()=> {
      navigate(-1);
      setUpdated(true);
      setOpenAlert(true);
      setAbmAlert('User successfully deleted');
    });
  }
  return (
    <IconButton color="error" onClick={handleClick}>
      <DeleteIcon/>
    </IconButton>
  );
}
