import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HooksHome from "./components/hooks/HooksHome";
import StateHooks from "./components/hooks/stateHooks/StateHooks";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hooks' element={<HooksHome />}>
                <Route path='stateHooks' element={<StateHooks />} />
            </Route>
        </Routes>
    );
};

export default Router;
