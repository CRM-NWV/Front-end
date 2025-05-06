import CartPatterns from "../../../../../assets/images/CartPatterns.png";
import { CiEdit } from "react-icons/ci";
import { TiDocumentDelete } from "react-icons/ti";

export default function MentorsItem() {
    return (
        <li className="mentors_item">
            <img src={CartPatterns} alt="" />
            <p className="mentors_gr_count">2 / 12</p>
            <h4 className="mentors_name">Акрамова Мадина</h4>
            <p className="mentors_subject">English</p>
            <p className="mentors_phone">0701 701 701</p>
            <p className="mentors_date">20.12.2017</p>
            <div className="mentors_btns">
                <button className="mentors_edit_delete"><CiEdit /></button>
                <button className="mentors_edit_delete"><TiDocumentDelete /></button>
            </div>
        </li>
    )
}
