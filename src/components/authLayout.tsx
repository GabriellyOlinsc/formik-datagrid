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
       // backgroundColor: '#f5f5f5', // Cor de fundo para a tela
    };

    const paperStyles = {
        width: '100%',
        maxWidth: 540,
        minHeight: 600, 
        borderRadius: '24px',
        backgroundColor: '#718096',
        padding: padding,
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