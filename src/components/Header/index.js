import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../core/useAuth'

export default function Header() {
    let { login, popupLogin } = useAuth()

    console.log(popupLogin)

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to='/' className="logo">
                        <img src='/images/logo.png' alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            {/* <div className="name">{user.name}</div> */}
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger" >
                                    </div>
                                    <div className="sub">
                                        <Link to="/thong-tin-ca-nhan/course">Khóa học của tôi</Link>
                                        <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                        {/* <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Đăng xuất</a> */}
                                    </div>
                                </div>
                            )
                                : (
                                    <div class="not-login bg-none">
                                        <a href=" # " class="btn-register" onClick={() => popupLogin()}>Đăng nhập</a>
                                        <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                                    </div>
                                )
                        }

                    </div>
                </div>
            </header>
        </>
    )
}
