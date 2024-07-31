import { Container, Grid, Paper } from '@mui/material'

export default function AuthLayout({
    children, padding
}: {
    children: React.ReactElement,
    padding?: number | string
}): React.ReactElement {
    
    const containerStyles = {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const paperStyles = {
        width: '100%',
        maxWidth: 540,
        minHeight: 600, 
        borderRadius: '24px',
        backgroundColor: '#2d3748',
        padding: padding || 1,
        boxShadow: 3,
        '@media (max-width: 1200px)': {
            width: 440,
        },
        '@media (max-width: 900px)': {
            width: '100%',
            padding: '16px',
            boxShadow: 'none',
        },
    };

    return (
        <Container sx={containerStyles}>
            <Paper elevation={3} sx={paperStyles}>
                {children}
            </Paper>
        </Container>
    )
}