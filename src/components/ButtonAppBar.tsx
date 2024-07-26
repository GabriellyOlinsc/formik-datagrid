import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

interface ButtonAppBarProps {
    onClick : () => void;
    title?: string;
    icon?: React.ElementType;
}

export default function ButtonAppBar({...props}) {
    const { onClick, title, icon: Icon } = props;
  
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar sx={{ backgroundColor: '#2d3748' }} position="fixed">
                <Toolbar >
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>User System</Typography>
                    {Icon ? (
                        <IconButton onClick={onClick} color="inherit">
                            <Icon style={{fontSize: 45}} />
                        </IconButton>
                    ) : (
                        <Button onClick={onClick} sx={{ fontSize: 20 }} color="inherit">
                            {title}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}