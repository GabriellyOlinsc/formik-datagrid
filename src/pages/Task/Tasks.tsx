import { Box, Grid, Typography } from "@mui/material";
import { Search } from "../../components";
import { useState } from "react";

export default function Tasks() {
    const [search, setSearch] = useState('')
    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>TASKS</Typography>
            <Grid container sx={{ width: '100%', alignContent: 'center', justifyContent: 'space-between' }}>
                <Box display="flex" width={'100%'} gap={2}>
                    <Search label="Search Tasks" search={search} setSearch={setSearch} />
                </Box>
            </Grid>
        </>
    )
}
