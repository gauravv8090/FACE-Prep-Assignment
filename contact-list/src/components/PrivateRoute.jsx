import { Navigate } from "react-router-dom"




export const PrivateRoute = ( {children} )=>{

    const loginAuthorisation = localStorage.getItem("Authenticated")

    console.log(loginAuthorisation);

    if(loginAuthorisation == "true"){
        return children;
    }

    return <Navigate to='/login' />

}