import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function ButtonAppBar({...props}) {
  
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar sx={{ backgroundColor: '#2d3748' }} position="fixed">
                <Toolbar >
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>User System</Typography>
                    <Button onClick={props.onClick} sx={{ fontSize: 20 }} color="inherit">
                    {props.title}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}