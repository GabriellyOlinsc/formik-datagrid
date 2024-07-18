import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";
import { Users } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    direction: "ltr",
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainPage />} path="/" />
                        <Route element={<Users />} path="/users" />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
