import { CiSearch } from "react-icons/ci";
import FilterIcon from "../../assets/icons/filter_icon.svg";

export default function Search() {
    return (
        <section className="search">
            <div className="container">
                <div className="search_wrapper">
                    <div className="search_input_filter">
                        <div className="search_input">
                            <CiSearch className="search_input_icon" />
                            <input type="text" placeholder="Поиск" />
                        </div>

                        <button className="button_filter">Фильтр <img src={FilterIcon} alt="" /></button>
                    </div>

                    <button className="button_filter">Добавить <img src={FilterIcon} alt="" /></button>
                </div>
            </div>
        </section>
    )
}
