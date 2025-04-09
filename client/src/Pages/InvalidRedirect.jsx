import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function InvalidRedirect() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/404',{state:{test:"something"}})

    },[])
  return (
    <div>InvalidRedirect</div>
  )
}
