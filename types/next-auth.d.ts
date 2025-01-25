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
            username: string
            id: string
            firstName: string
            lastName: string
        }
    }
}