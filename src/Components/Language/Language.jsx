import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

export default function Language() {
    return (
        <div className="language_select">
            <TbWorld className="language_world_icon" />
            <p>Русский</p>
            <IoIosArrowDown />
        </div>
    )
}
