import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";


export default function SidebarItem({ to, icon, text }) {
    return (
        <li className="sidebar_item">
            <NavLink to={to}>
                <img src={icon} alt="" />
                <p className="sidebar_text">{text}</p>
                <RiArrowRightSLine className="sidebar_arrow" />
            </NavLink>
        </li>
    )
}
