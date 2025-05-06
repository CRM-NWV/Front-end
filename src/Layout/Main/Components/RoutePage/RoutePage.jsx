import { Route, Routes } from "react-router-dom";
import { routes } from "../../../../config/routes"
import Header from "../../../../Components/Header/Header";

export default function RoutePage() {
    const routesConfig = routes();

    return (
        <div className="routes_page">
            <Header />
            <Routes>
                {routesConfig.map((route) => (
                    <Route key={route.id} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    )
}
