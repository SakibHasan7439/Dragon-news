import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h2>This is auth</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;