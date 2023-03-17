import React, {useState} from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login (){
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        //@ts-ignore
        if(!email | !password){
            setError("Preencha todos os campos!");
            return;
        }

        const res = signIn(email, password);

        if(res){
            setError(res);
            return;
        }

        navigate("/");
    }

    return(
        <C.Container>
            <C.Label>Login</C.Label>
            <C.Content>
                <Input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e: any) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e: any) => [setPassword(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <C.LabelSignUp>
                    Não tem uma conta?
                        <C.Strong>
                            <Link to="/register"> Cadastre-se</Link>
                        </C.Strong>
                </C.LabelSignUp>
            </C.Content>
        </C.Container>
    );
};