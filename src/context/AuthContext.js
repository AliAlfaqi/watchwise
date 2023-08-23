import { createContext } from "react";

export const AuthContext = createContext(undefined)

const AuthContextProvider = (props) => {

    return <AuthContext.Provider value={{}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider