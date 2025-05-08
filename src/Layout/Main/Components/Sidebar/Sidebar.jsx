import SidebarItem from "./SidebarItem";
// import icons
import Icon1 from "../../../../assets/icons/sidebar_icons/sidebar_icon_1.svg";
import Icon2 from "../../../../assets/icons/sidebar_icons/sidebar_icon_2.svg";
import Icon3 from "../../../../assets/icons/sidebar_icons/sidebar_icon_3.svg";

export default function Sidebar() {
    return (
        <nav className='sidebar'>
            <h1 className='sidebar_logo'>Logo</h1>

            <ul className="sidebar_list">
                <SidebarItem to="/dashboard" icon={Icon1} text={"Дашборд"} />
                <SidebarItem to="/mentors" icon={Icon2} text={"Менторы"} />
                <SidebarItem to="/courses" icon={Icon3} text={"Курсы"} />
            </ul>
        </nav>
    )
}
