import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userApi from '../apis/userApi'

export let Context = React.createContext()




export default function AppProvider({ children }) {
    const [auth, setAuth] = useState({
        login: false,
        user: null,
    })



    function popupLogin(flag = true) {
        document.getElementById('popupLogin').style.display = flag ? 'flex' : 'none'
    }

    const handleLogin = async (form) => {
        const res = await userApi.register(form)

        console.log(res)
    }
    let history = useHistory()


    return (
        <Context.Provider value={{ auth, popupLogin, handleLogin }}>
            {children}
        </Context.Provider>
    )
}
