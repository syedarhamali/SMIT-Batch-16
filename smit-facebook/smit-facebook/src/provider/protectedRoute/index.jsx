import { useContext } from "react"
import { AuthContext } from "../../../context"
import { Navigate, useNavigate } from "react-router"

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { firebaseUser , loading } = useContext(AuthContext)
    const { uid } = firebaseUser || {}
    console.log(loading,uid)
    
    if(loading && uid === undefined){
        console.log("running")
       return <Navigate to='/signin' replace />
    }

    if (loading) {
        return <div>Loading....</div>
    } 
    return (
        uid ? <>{children}</> : <Navigate to='/signin' replace />
    )
}