'use client'
import { useRouter } from "next/navigation"

export default function LoginPartial(){
    const router = useRouter()
    return(
        <section>
            <div>Login</div>
            <button className="border " onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
        </section>
    )
}