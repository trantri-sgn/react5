import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useFormValidate from '../../hook/useFormValidate'
import useAuth from '../../core/useAuth'
export default function Login() {
    const divRef = useRef()
    let { handleLogin } = useAuth()
    const { form, inputChange } = useFormValidate({
        username: "",
        password: ""
    }, {
        rule: {
            username: {
                required: true,
                pattern: "email"
            },
            password: {
                requied: true,
                min: 6,
                max: 32,
            }
        }
    })


    function close() {
        divRef.current.style.display = 'none'
    }

    const login = async () => {
        let res = await handleLogin(form)
        close()
    }

    return (
        ReactDOM.createPortal(
            <div className="popup-form popup-login" id="popupLogin" ref={divRef} style={{ display: 'none' }}>
                <div className="wrap">
                    {/* login-form */}
                    <div className="ct_login" style={{ display: 'block' }}>
                        <h2 className="title">Đăng nhập</h2>
                        {/* {
                            formError && <p className="error-text" style={{ textAlign: 'center', marginBottom: 20 }}>{formError}</p>
                        } */}
                        <label>
                            <input type="text" name="username" value={form.username} onChange={inputChange} placeholder="Email / Số điện thoại" />
                            {/* {error.username && <p className="error-text">{error.username}</p>} */}
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={inputChange} />
                            {/* {error.password && <p className="error-text">{error.password}</p>} */}

                        </label>
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <div className="btn rect main btn-login" onClick={login} >đăng nhập</div>
                        <div className="text-register" style={{}}>
                            <strong>hoặc đăng ký bằng</strong>
                        </div>
                        <div>
                            <div className="btn btn-icon rect white btn-google">
                                <img src="/img/google.svg" alt="" />
                                Google
                            </div>
                        </div>
                        <div className="close" >
                            <img src="/img/close-icon.png" alt="" />
                        </div>
                    </div>
                    {/* email form */}
                    <div className="ct_email">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <input type="text" placeholder="Email" />
                        <div className="btn rect main btn-next">Tiếp theo</div>
                        <div className="back" />
                        <div className="close" >
                            <img src="/images/close-icon.png" alt="" onClick={close} />
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('root1')
        )
    )
}
