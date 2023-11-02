import React, {Fragment, useEffect, useState, useContext} from "react";
import {Outlet} from 'react-router-dom';
import Menu from "./Menu";
import Loader from "./Loader";
import { AuthContext } from "./AuthProvider";

function Layout() {
    const {isLoading} = useContext(AuthContext);

    return (
        <Fragment>
            <Menu />
            {isLoading ? <Loader /> : <Outlet />}
        </Fragment>

    )
}

export default Layout;
