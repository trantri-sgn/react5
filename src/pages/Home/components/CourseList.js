import React from 'react'
import Course from './Course'

export default function CourseList({ online, offline }) {

    return (
        <>
            <section className="section-courseoffline section-blue">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            online.map((e) => <Course key={e._id} {...e} />)
                        }
                    </div>

                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            offline.map((e) => <Course key={e._id} {...e} />)
                        }
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
