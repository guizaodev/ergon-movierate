import React, { useEffect } from "react";
import * as C from  "./styles";
import {useNavigate, Outlet, Link} from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        console.log("Home");
    }, []);

    return (
        <C.Container>
            <C.Nav>
                <Link to="/">Home</Link>
                <Link to="/feed">Feed</Link>
            </C.Nav>
            <Outlet/>
        </C.Container>
    );
};

export default Home;