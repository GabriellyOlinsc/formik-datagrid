import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';

export default function DataTable() {
    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'job', headerName: 'Job Type', width: 200 }
    ]

    const rows = [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', job: 'Developer' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', job: 'Designer' },
        { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', job: 'Manager' },
    ];

    return (
        
            <DataGrid
                hideFooter
                hideFooterPagination
                rows={rows}
                columns={columns}
                sx={classes.dataGrid}
            />
    )
}