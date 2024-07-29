import { Clear, Search } from "@material-ui/icons";
import { ButtonBase, SxProps, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const classes = {
    adornment: {
        borderLeft: '1px solid #bcbec0',
        display: 'flex',
        color: "#bcbec0",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        pl: 1,
        height: '100%',
    },
}

interface SearchProps {
    search: string,
    setSearch: (s: string) => void,
    label: string,
    sx?: SxProps
}

const SearchComponent: React.FC<SearchProps> = ({ search, setSearch, label, sx }) => {
    return (
        <>
            <TextField
                variant="filled"
                label={label}
                fullWidth
                InputProps={{
                    name: 'new-search',
                    id: 'search',
                    autoComplete: 'off',
                    endAdornment:
                        search === '' ? (
                            <Box
                                sx={{
                                    ...classes.adornment,
                                    pointerEvents: 'none',
                                }}
                            >
                                <Search />
                                <Typography variant="caption" sx={{ mx: 1 }}>
                                    Buscar
                                </Typography>
                            </Box>
                        ) :
                            <ButtonBase sx={classes.adornment} onClick={() => setSearch('')}>
                                <Clear />
                                <Typography variant="caption" sx={{ mx: 1 }}>
                                    Limpar
                                </Typography>
                            </ButtonBase>
                }}
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                sx={{
                    mb: 2,
                    ...sx,
                }}
            />
            < input name="search-task" type="text" placeholder="Search Bar" value="" />
        </>
    )
}

export default SearchComponent;