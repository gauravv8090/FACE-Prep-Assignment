import { Box, Button, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";



export const Home = ()=>{


    const [countOut, setCountOut] = useState(0);
    const handelLogout= ()=>{
        localStorage.setItem("Authenticated", false);
        setCountOut(1);
    }

    useEffect(()=>{

    }, [])

    if(countOut > 0){
       return <Navigate to={'/login'}  />
    }

    return (
        <Box>
            <Text fontSize={'40px'} fontWeight={'800'} >Home</Text>
            <Button onClick={handelLogout} >Logout</Button>
        </Box>
    )
}