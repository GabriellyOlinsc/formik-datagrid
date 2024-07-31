import { createTheme } from "@mui/material";

const primaryMain = "#1a202c";
const primaryLight = "#ffffff";
const secondaryMain = "#2d3748";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1248,
      xl: 1920,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    text: {
      primary: primaryLight,
    },
    background: {
      default: primaryLight,
    },
  },
  direction: "ltr",
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.23)",
          },
          "& .MuiOutlinedInput-root": {
            "& input": {
              color: "#ffffff", // Cor do texto do input
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff", // Cor da borda do campo quando focado
            },
          },
          "& .MuiFormLabel-root": {
            color: "#ffffff", // Cor do texto do label
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          ":-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #333f45 inset !important",
            WebkitTextFillColor: "#F5F5F5 !important",
            caretColor: "#F5F5F5 !important",
            borderRadius: "inherit",
          },
        },
      },
    },
    MuiButton: {
        styleOverrides: {
            sizeMedium: {
                fontSize: '18px',
                padding: '8px 16px',
            }
        }
    }
  },
});

export default theme;
