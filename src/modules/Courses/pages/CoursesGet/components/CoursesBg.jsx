import React from 'react'
import CoursesItem from './CoursesItem'

export default function CoursesBg() {
    return (
        <section>
            <div className="container">
                <div className="courses_bg">
                    <h3 className='courses_title'>Курсы</h3>

                    <ul className='courses_list'>
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />
                        <CoursesItem />

                    </ul>
                </div>
            </div>
        </section>
    )
}
