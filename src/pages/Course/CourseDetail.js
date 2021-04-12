import React, { useState } from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import useDetail from '../../hook/useDetail'
import Accordion from './components/Accordion'

export default function CourseDetail() {
    const [state, setState] = useState({
        currentContent: -1,
    })
    let { params: { slug } } = useRouteMatch()

    const { state: { course, related }, loading } = useDetail(slug);

    const handClickAccordion = (i) => {
        setState({
            ...state,
            currentContent: i === state.currentContent ? -1 : i
        })
    }


    if (loading) {
        return <h1>Loading ....</h1>
    }

    return (
        <>
            <main className="course-detail" id="main">
                <section className="banner style2" style={{ background: '#cde6fb' }}>
                    <div className="container">
                        <div className="info">
                            <h1>{course.data.title}</h1>
                            <div className="row">
                                <div className="date"><strong>Khai giảng:</strong> {course.data.opening_time}</div>
                                <div className="time"><strong>Thời lượng:</strong>{`${course.data.count_video} buổi`}</div>
                            </div>
                            <div className="btn white round" style={{ color: '#70b6f1' }} ></div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="video">
                                <div className="icon">
                                    <img src="/images/play-icon-white.png" alt="" />
                                </div> <span>giới thiệu</span>
                            </div>
                            <div className="money">{`${course.data.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ`}</div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="container">
                        <p className="des">{course.data.long_description}</p>
                        <h2 className="title">giới thiệu về khóa học</h2>
                        <div className="cover">
                            <img src="img/course-detail-img.png" alt="" />
                        </div>
                        <h3 className="title">nội dung khóa học</h3>
                        {course.data.content.map((e, i) => <Accordion key={i} active={state.currentContent === i} handClickAccordion={handClickAccordion.bind(null, i)} {...e} num={i + 1} />)}
                        <h3 className="title">yêu cầu cần có</h3>
                        <div className="row row-check">
                            {course.data.required.map(e => <div key={e.content} className="col-md-6">{e.content}</div>)}
                        </div>
                        <h3 className="title">hình thức học</h3>
                        <div className="row row-check">
                            {course.data.benefits.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)}
                        </div>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> {course.data.opening_time} <br />
                            <strong>Thời gian học: </strong> {course.data.schedule}
                        </p>
                        <h3 className="title">Người dạy</h3>
                        <div className="teaches">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src={course.data.teacher.avatar.link} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">{course.data.teacher.title}</div>
                                    <div className="title">{course.data.teacher.position}</div>
                                    <p className="intro">
                                        {course.data.teacher.description}
                                    </p>
                                    {course.data.teacher.website === null ? "" : <p><strong>Website:</strong> <a href="# ">{course.data.teacher.website}</a></p>}
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="user">
                                <img src="img/user-group-icon.png" alt="" /> {`${course.data.number_student_default} bạn đã đăng ký`}
                            </div>
                            <div className="btn main btn-register round">đăng ký</div>
                            <div className="btn-share btn overlay round btn-icon">
                                <img src="/images/facebook.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">Khóa học</h3>
                            <h2 className="main-title">Liên quan</h2>
                        </div>
                        <div className="list row">
                            {related.data.map(e => {
                                return (
                                    <div key={e.id} className="col-md-4 course">
                                        <div className="wrap">
                                            <Link to={`${e.slug}`} className="cover">
                                                <img src={e.thumbnail.link} alt="" />
                                            </Link>
                                            <div className="info">
                                                <Link to={`${e.slug}`} className="name">
                                                    {e.title}
                                                </Link>
                                                <p className="des">
                                                    {e.short_description}
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="teacher">
                                                    <div className="avatar">
                                                        <img src={e.teacher.avatar.link} alt="" />
                                                    </div>
                                                    <div className="name">{e.teacher.title}</div>
                                                </div>
                                                <div className="register-btn">Đăng Ký</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
