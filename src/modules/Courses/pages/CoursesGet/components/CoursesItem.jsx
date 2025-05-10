import CartPatterns from "../../../../../assets/images/CartPatterns.png";
import { CiEdit } from "react-icons/ci";
import { TiDocumentDelete } from "react-icons/ti";

export default function CoursesItem() {
    return (
        <li className="courses_item">
            <img src={CartPatterns} alt="Course background" />
            <p className="courses_gr_count">2 / 12</p>
            <h4 className="courses_name">Английский  Level 7 </h4>
            <p className="courses_subject">Ms.Lola</p>
            <p className="courses_phone">23 Студентов</p>
            <p className="courses_date">Пн  Ср  Пт  16:00 - 18:00</p>
        </li>
    );
}
