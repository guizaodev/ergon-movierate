import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }:{children: any}) => {
    const [user, setUser] = useState();
    
    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_db');

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter((user: any) => user.email === JSON.parse(userToken).email);

            if(hasUser){
                setUser(hasUser[0]);
            }
        }
    }, []);

const signIn = (email: any, password: any) => {
    //@ts-ignore
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));
    let hasUser;
    usersStorage?.filter((user: any) => {user.email === email;console.log(user.password); hasUser = [{email: user.email, password: user.password}]});
    console.log(hasUser);
    if(hasUser){
        //@ts-ignore
        if(hasUser[0].email === email && hasUser[0].password === password){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem('user_token', JSON.stringify({email, token}));
            //@ts-ignore
            setUser({email, password});
            return;
        } else {
            return "E-mil ou senha incorretos";
        }
    } else {
        return "Usuário não encontrado";
    }
};

const signUp = (email: any, password: any) => {
    //@ts-ignore
    const  usersStorage = JSON.parse(localStorage.getItem('users_db'));
    const hasUser = usersStorage?.filter((user: any) => user.email === email);

    if(hasUser?.lenght){
        return "Usuário já cadastrado";
    }

    let newUser;

    if(usersStorage){
        newUser = [...usersStorage, {email, password}];
    } else {
        newUser = [{email, password}];
    }
    //@ts-ignore
    localStorage.setItem('users_db', JSON.stringify(newUser));
    return;
}

const signOut = () => {
    //@ts-ignore
    setUser(null);
    localStorage.removeItem('user_token');
}

    return <AuthContext.Provider value={{user, signed: !!user, signIn, signUp, signOut}}>{children}</AuthContext.Provider>;
};


