import React from "react";
import * as C from "./styles";

//@ts-ignore
const Button = ({Text, onClick, Type = "button"}) => {
    return(
        // @ts-ignore
        <C.Button type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    )
}

export default Button;