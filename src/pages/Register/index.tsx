import React, { useState } from "react";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signUp } = useAuth();

    const handleRegister = async () => {
        //@ts-ignore
        if(!email | !emailConf | !password){
            setError("Preencha todos os campos!");
            return;
        } else if (email !== emailConf){
            setError("Os e-mails não coincidem!");
            return;
        }

        const res = signUp(email, password);

        if(res){
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }

    return(
        <C.Container>
            <C.Label>Cadastro</C.Label>
            <C.Content>
                <Input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e: any) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="email"
                    placeholder="Confirme o e-mail"
                    value={emailConf}
                    onChange={(e: any) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e: any) => [setpassword(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Cadastrar-se" onClick={handleRegister} />
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/"> Faça login</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
}

export default Register;