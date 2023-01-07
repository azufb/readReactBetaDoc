import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const HooksHome = () => {
    return (
        <div>
            <h1>Hooksについて</h1>
            <Navigation />
            <Outlet />
        </div>
    );
};

export default HooksHome;