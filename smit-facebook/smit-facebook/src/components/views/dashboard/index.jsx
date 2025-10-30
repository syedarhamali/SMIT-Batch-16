import { useContext } from "react"
import { AuthContext } from "../../../../context"
import { signOut } from "firebase/auth"
import { auth } from "../../../../config"
import { Navigate } from "react-router"

function Dashboard() {
    const { firebaseUser } = useContext(AuthContext)
    const { email } = firebaseUser || {}
    console.log(email)
    const handleSignout = () => {
        signOut(auth).then(() => {
            return <Navigate to='/signin' replace />
        })
    }
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6">Users</div>
                <div className="bg-white shadow rounded-lg p-6">Revenue</div>
                <div className="bg-white shadow rounded-lg p-6">Sales</div>
            </div>
            <button onClick={handleSignout}>Log out</button>
        </>
    )
}


export default Dashboard