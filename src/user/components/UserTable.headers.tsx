import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteButton from "../../mui/DeleteButton";
import { User } from "../interface/user";
import UserModal from "./UserModal";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    type: 'number',
  },
  {
    field: 'firstname',
    headerName: 'FirstName',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'lastname',
    headerName: 'Lastname',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'username',
    headerName: 'Username',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'createAt',
    headerName: 'Created at',
    headerAlign: 'center',
    align: 'center',
    type: 'date',
    flex: 1,
  },
  {
    field: 'updateAt',
    headerName: 'Updated at',
    headerAlign: 'center',
    align: 'center',
    type: 'date',
    flex: 1,
  },
  {
    field: 'accion',
    headerName: 'Acciones',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams<User, User>) => (
      <>
        <UserModal id={params.row.id}/>
        <DeleteButton id={params.row.id}/>
      </>
    ),
  },
];
export default columns;
