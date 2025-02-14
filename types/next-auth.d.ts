import type { User } from "next-auth";

declare module 'next-auth'{
    interface User{
        id: string
        username: string
        
    }
}
declare module 'next-auth'{
    interface Session{
        user:{
            id: string,
            username: string,
            firstName: string,
            lastName: string,
            role: string,
            isBlocked: boolean
        }
    }
}