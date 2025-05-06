import React from 'react'
import MentorsItem from './MentorsItem'

export default function MentorsBg() {
    return (
        <section>
            <div className="container">
                <div className="mentors_bg">
                    <h3 className='mentors_title'>Менторы</h3>
                    <p className='mentros_all_count'>Общее количество:  27</p>

                    <ul className='mentors_list'>
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                        <MentorsItem />
                    </ul>
                </div>
            </div>
        </section>
    )
}
