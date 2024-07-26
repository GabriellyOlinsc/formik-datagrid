import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography, Zoom } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface ButtonAppBarProps {
    buttons: {
        title?: string;
        icon?: React.ElementType;
        message?: string;
        route: string;
    }[];
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ buttons }) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar sx={{ backgroundColor: '#2d3748' }} position="fixed">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>User System</Typography>
                    {buttons.map((btn, index) => (
                        btn.icon ? (
                            <Tooltip key={index} TransitionComponent={Zoom} placement="bottom" title={<p style={{ height: 3, fontSize: 16 }}>{btn.message}</p>}>
                                <IconButton 
                                    onClick={() => navigate(btn.route)} 
                                    sx={{ fontSize: 40, fontWeight: 100, mr: 2 }} 
                                    color="inherit"
                                >
                                    <btn.icon style={{ fontSize: 35 }} />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Button 
                                key={index} 
                                onClick={() => navigate(btn.route)} 
                                sx={{ fontSize: 20, mr: 2 }} 
                                color="inherit"
                            >
                                {btn.title}
                            </Button>
                        )
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;
