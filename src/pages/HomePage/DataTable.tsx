import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { classes } from './styles';

interface DataTableProps {
    formData: any[];
}

const DataTable: React.FC<DataTableProps> = ({ formData }) => {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 230 },
        { field: 'email', headerName: 'Email', width: 280 },
        { field: 'phone', headerName: 'Phone', width: 230 },
        { field: 'companyName', headerName: 'Company', width: 230 }
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