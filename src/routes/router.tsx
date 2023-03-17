import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Feed from "../pages/Feed";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth"

type PrivateProps = {
    Item: any;
}

const Private = ({Item}:PrivateProps) => {
    const {signed} = useAuth();

    return signed ? <Item/> : <Login/>;
};

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Private Item={Home}/>}/>
                    <Route path="feed/*" element={<Private Item={Feed}/>}/>
                    <Route path="login/*" element={<Login/>}/>
                    <Route path="register/*" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RouterApp;