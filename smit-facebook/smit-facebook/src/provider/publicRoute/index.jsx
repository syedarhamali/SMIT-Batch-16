import { useContext } from "react"
import { AuthContext } from "../../../context"
import { Navigate } from "react-router"

export default function PublicRoute({ children }) {
    const { firebaseUser } = useContext(AuthContext)
    const { uid } = firebaseUser || {}
   
    return (
        uid ?  <Navigate to='/dashboard' replace /> : <>{children}</>
    )
}