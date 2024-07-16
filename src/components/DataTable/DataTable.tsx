import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';

interface DataTableProps {
    formData: any[];
}

const DataTable: React.FC<DataTableProps> = ({ formData }) => {

    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name', width: 230 },
        { field: 'email', headerName: 'Email', width: 280 },
        { field: 'jobType', headerName: 'Job Type', width: 230 }
    ]

    return (
        <DataGrid
            hideFooter
            disableDensitySelector
            disableColumnMenu
            rows={formData ? formData.map((data: any, index: number) => ({
                id: index + 1,
                ...data
            })): []}
            rowHeight={48}
            columns={columns}
            sx={classes.dataGrid}
        />
    )
}

export default DataTable;