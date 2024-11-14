import { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const authInfo = {
    name: "Omok",
}
const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;