import { createContext, PropsWithChildren, useState } from "react"


type User = {
    id: String
    fullname: String
    email: String
    password: String
    token: String
}

type AuthContextProops = {
    user: User
    login: () => Promise<void>
    logout: () => void
}


export const AuthContext = createContext<AuthContextProops>({} as AuthContextProops)

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null)
    async function login(){}
    async function logout(){}

    return (

        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}