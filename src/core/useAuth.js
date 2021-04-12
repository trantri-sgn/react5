import { useContext } from 'react'
import { Context } from './AppProvider'

export default function useAuth() {
    const { auth, popupLogin, handleLogin } = useContext(Context)

    return {
        login: auth.login,
        popupLogin,
        handleLogin
    }
}
