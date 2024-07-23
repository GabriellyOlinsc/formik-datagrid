import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { classes } from './styles';
import { UsersType } from '../../model/users.interface';
import { useState } from 'react';

interface TableUsersProps {
    data: UsersType[];
}

const TableUsers: React.FC<TableUsersProps> = ({ data }) => {
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'username', headerName: 'Username', width: 190 },
        { field: 'address', headerName: 'City', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 250 },
        { field: 'company', headerName: 'Company', width: 250 },
        { field: 'email', headerName: 'Email', width: 300}
    ]

    return (
        <>
        <DataGrid
            hideFooter
            rows={data ? data.map((user: any, index: number) => ({
                id: user.id || index + 1,
                name: user.name,
                email: user.email,
                username: user.username,
                address: user.address.city,
                phone: user.phone,
                company: user.company.name,
            })) : []}
            columns={columns}
            sx={{...classes.dataGrid, mt:20}}
            autoHeight
            checkboxSelection
          //  disableRowSelectionOnClick
            pageSizeOptions={[5,10,15]}
        />
        </>
    )
}

export default TableUsers;