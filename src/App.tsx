import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import { MainPage } from "./components";
import { ViewPage } from "./pages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainPage />} path="/" />
                    <Route element={<ViewPage />} path="/viewPage" />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;