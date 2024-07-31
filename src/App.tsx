import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";
import { Login, Tasks, Users } from "./pages";
import { ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { selectIsAuthenticated } from "./store/modules/auth/slice";
import theme from "./theme";
import { useTheme } from "@emotion/react";


function App() {
    const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state));

    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    {isAuthenticated && (
                        <ButtonAppBar
                            buttons={[
                                { title: 'Home', icon: HomeIcon, route: '/home', message: 'Go to Home' },
                                { title: 'Users', icon: GroupIcon, route: '/users', message: 'View Users' },
                                { title: 'Tasks', icon: AssignmentIcon, route: '/tasks', message: 'Tasks' }
                            ]}
                        />
                    )}
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        {isAuthenticated ? (
                            <>
                                <Route path="/home" element={<MainPage />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/tasks" element={<Tasks />} />
                                <Route path="*" element={<Navigate to="/home" />} /> {/* Redireciona para /home se tentar acessar uma rota não encontrada */}
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/login" />} />
                        )}</Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
