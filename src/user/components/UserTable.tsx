import React from "react";
import { CircularProgress } from "@mui/material";
import AlertError from "../../mui/AlertError";
import Table from "../../mui/Table";
import TableContainer from "../../shared/TableContainer";
import createColumns from "./UserTable.columns";
import { User } from "../interface/user";

type UserTableProps = {
  loading: boolean;
  data: User[];
  error: string;
  refresh: () => void;
};

export default function UserTable({
  loading,
  data,
  error,
  refresh,
}: UserTableProps) {
  const columns = createColumns(refresh);
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>The users list couldn't be loaded</AlertError>}
    </TableContainer>
  );
}
