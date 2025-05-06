import RoutePage from "./Components/RoutePage/RoutePage";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function index() {
    return (
            <div className="main">
                <Sidebar />
                <RoutePage />
            </div>
    )
}
