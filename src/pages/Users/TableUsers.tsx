import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';
import { UsersType } from '../../model/users.interface';

interface TableUsersProps {
    data: UsersType[];
}

const TableUsers: React.FC<TableUsersProps> = ({ data }) => {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'username', headerName: 'Username', width: 300 },
        { field: 'address', headerName: 'City', width: 300 },
        { field: 'phone', headerName: 'Phone', width: 300 },
        { field: 'company', headerName: 'Company', width: 300 },
    ]

    return (
        <>
        <DataGrid
            hideFooter
            disableDensitySelector
            disableColumnMenu
            rows={data ? data.map((user: UsersType, index: number) => ({
                id: user.id || index + 1,
                name: user.name,
                username: user.username,
                address: user.address.city, 
                phone: user.phone,
                company: user.company.name,
            })) : []}
            columns={columns}
            sx={{...classes.dataGrid, mt:20 }}
            autoHeight
        />
        </>
    )
}

export default TableUsers;