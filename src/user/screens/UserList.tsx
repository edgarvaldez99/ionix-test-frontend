import { Typography } from "@mui/material";
import UserModal from "../components/UserModal";
import UserTable from "../components/UserTable";
import useUserList from "../hooks/user-list";

export default function UserList() {
  const { loading, data, error, refresh } = useUserList();
  return (
    <>
      <Typography variant="h5" fontWeight="bold" align="center" color="primary">
        Users List
      </Typography>
      <UserModal refresh={refresh} />
      <UserTable
        refresh={refresh}
        loading={loading}
        data={data}
        error={error}
      />
    </>
  );
}
