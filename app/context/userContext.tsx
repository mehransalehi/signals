'use client'
import { createContext, ReactNode, useContext } from "react";
import { User } from "@prisma/client";

export const UserContext = createContext<User | false>(false);

export async function UserProvider({ children, user }: { children: ReactNode, user: User | false }) {

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export function UseUser(){
    return useContext(UserContext);
}