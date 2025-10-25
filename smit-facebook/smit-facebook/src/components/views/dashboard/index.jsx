import { useContext } from "react"
import { AuthContext } from "../../../../context"
import { signOut } from "firebase/auth"
import { auth } from "../../../../config"
import { useNavigate } from "react-router"

function Dashboard() {
    const { firebaseUser , loading } = useContext(AuthContext)
    const {email} = firebaseUser || {}
    const navigate = useNavigate()
    console.log(email)
    const handleSignout = () =>{
        signOut(auth)
        navigate('/signin')
    }
    return (
        <>
        
        <div>Dashboard</div>

        <button onClick={handleSignout}>Log out</button>
        </>
    )
}


export default Dashboard