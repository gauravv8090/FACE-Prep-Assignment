import { Box, Button, Input, Text, } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react"
import { Navigate } from "react-router-dom";




export const Login = ()=>{
    


    useEffect(()=>{
        
       localStorage.setItem("Authenticated", false);

    }, [])

    console.log("Login here");

    const [ user, setUser ] = useState( { username: '', password: '' } )


    const [loginAuth, SetLoginAuth] = useState(false); 

    const { username, password } = user;

    const handelChnage = ( e )=>{
        const {name, value} = e.target;

        setUser({...user, [name] : value})
    }

    console.log(user);

    const handeLogin = ()=>{

        if(user.username === "foo" && user.password === "bar"){
            alert("LOGIN SUCCESSFUL" )
            localStorage.setItem("Authenticated", true)
            // return <Navigate to='/' />
            SetLoginAuth(true)
        }else{
            alert("Enter Correct Details eg: username: 'foo' password: 'bar'")
        }


    }

    
    // if(localStorage.getItem("Authenticated") == true){
    //     return <Navigate to='/' />
    // }

    if(loginAuth){
        return <Navigate to='/' />
    }


    return (
        <Box w={'100%'} height={'100vh'} border={'1px solid teal'} display={'flex'} alignItems='center' >
        <Box w={{ base: '300px', sm: '300px',  md: '500px', lg: '600px' }}
         height={{ base: '250px', sm: '250px',  md: '300px', lg: '400px' }}  margin="auto" boxShadow={'2xl'} display='flex' flexDirection={'column'}  >
            <Text fontWeight={'700'} fontSize={{ base: '20px', sm: '20px',  md: '35px', lg: '40px' }}
             mt={{ base: '5px', sm: '5px',  md: '10px', lg: '10px' }}  >Login</Text>
            <Input w={'60%'} h='50px' m={{ base: '10px auto', sm: '10px auto',  md: '15px auto', lg: '20px auto' }}
             onChange={handelChnage} name='username' value={username} placeholder="Enter UserName" mt={{ base: '20px', sm: '20px',  md: '35px', lg: '50px' }} />
            <Input w={'60%'} h='50px' m={{ base: '10px auto', sm: '10px auto',  md: '15px auto', lg: '20px auto' }} onChange={handelChnage} name='password' value={password}  placeholder="Enter Password"  />
            <Button w={'40%'} m='20px auto' onClick={handeLogin} >Submit</Button>
        </Box>
        </Box>
    )
}