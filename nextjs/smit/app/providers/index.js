// import { createContext, useEffect, useState } from "react"

// export const AuthContext = createContext()

// export default function ProtectedRoute({ childrens }) {
//     const [user, setUser] = useState({

//     })

//     useEffect(() =>{

//     }, [])


//     return (
//         <AuthContext.Provider value={user}>
//             {childrens}
//         </AuthContext.Provider>
//     )
// }


// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'

export function Providers({ children }) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}