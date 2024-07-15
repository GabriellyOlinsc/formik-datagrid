import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function DataTable() {
    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'job', headerName: 'Job Type', width: 200 }
    ]

    return (
        <DataGrid
            disableDensitySelector
            disableColumnMenu
            hideFooter
            columns={columns}></DataGrid>
    )
}