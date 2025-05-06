import Bell from "../../assets/icons/bell.svg";
import { FiSearch } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import Language from "../Language/Language";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="heaader_left">
                        <MdMenu className="header_menu" />
                        <div className="global_search">
                            <input className="global_input" placeholder="Поиск" type="text" />
                            <FiSearch className="global_icon" />
                        </div>
                    </div>

                    <div className="header_right">
                        <div className="header_bell">
                            <img className="header_bell_icon" src={Bell} alt="" />
                            <p className="header_bell_count">2</p>
                        </div>

                        <Language />
                    </div>
                </div>
            </div>
        </header>
    )
}
