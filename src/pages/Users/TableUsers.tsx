import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';
import { UsersType } from '../../model/users.interface';

interface TableUsersProps {
    data: UsersType[];
}

const TableUsers: React.FC<TableUsersProps> = ({ data }) => {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'username', headerName: 'Username', flex: 1 },
        { field: 'address', headerName: 'City', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'company', headerName: 'Company', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 }
    ];

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', marginTop: '10%' }}>
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
                sx={{ ...classes.dataGrid }}
                autoHeight
                checkboxSelection
                pageSizeOptions={[5]}
            />
        </div>
    )
}

export default TableUsers;
