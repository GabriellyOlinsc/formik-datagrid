import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";
import { Tasks, Users } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';

const theme = createTheme({
    direction: "ltr",
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ButtonAppBar
                        buttons={[
                            { title: 'Home', icon: HomeIcon, route: '/', message: 'Go to Home' },
                            { title: 'Users', icon: GroupIcon, route: '/users', message: 'View Users' },
                            { title: 'Tasks', icon: AssignmentIcon, route: '/tasks', message: 'Tasks' }
                        ]}
                    />
                    <Routes>
                        <Route element={<MainPage />} path="/" />
                        <Route element={<Users />} path="/users" />
                        <Route element={<Tasks />} path="/tasks" />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
