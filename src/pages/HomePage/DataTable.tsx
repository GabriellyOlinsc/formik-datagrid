import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';

interface DataTableProps {
    formData: any[];
}

const DataTable: React.FC<DataTableProps> = ({ formData }) => {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'companyName', headerName: 'Company', flex: 1 }
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