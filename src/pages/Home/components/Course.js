import React from 'react'
import { Link } from 'react-router-dom'

export default function Course({ title, course_status, short_description, teacher, slug, thumbnail }) {

    const CourseStatus = (status) => {
        switch (status) {
            case "sap-khai-gian":
                return "Sắp Khai Giảng"
            case "dang-dien-ra":
                return "Đang Diễn Ra"
            case "da-ket-thuc":
                return "Đã Kết Thúc"
            default:
                break;
        }
    }
    return (
        <>
            <div className="col-md-4 course">
                <div className="wrap">
                    <Link className="cover" to={`/course-detail/${slug}`}>
                        <img src={thumbnail?.link} alt="" />
                        <span className="badge b1">{CourseStatus(course_status)}</span>
                        <div className="hover">
                            <div className="top">
                                <div className="user">
                                    <img src="images/icon-user-white.svg" alt="" />
                          12</div>
                                <div className="heart">
                                    <img src="images/icon-heart.svg" alt="" /> 100
                        </div>
                            </div>
                            <div className="share">
                                <img src="images/icon-viewmore.svg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <div className="info">
                        <Link className="name" to={`/course-detail/${slug}`}>
                            {title}
                        </Link>
                        <p className="des">
                            {short_description}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={teacher?.avater?.link} alt="" />
                            </div>
                            <div className="name">{teacher?.title}</div>
                        </div>
                        <div className="register-btn">Đăng Ký</div>
                    </div>
                </div>
            </div>
        </>
    )
}
