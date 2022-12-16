import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";



export const Home = ()=>{

    
    const [countOut, setCountOut] = useState(0);
    
    const [data, setData] = useState([]);
    
    
    const getData = async ()=>{
        
        let res = await fetch(`https://randomuser.me/api/?results=20`);
        let res2 = await res.json();
        
        setData(res2.results);
        
    }
    
    useEffect(()=>{
        getData()
    }, [])

    console.log(data);
    


    const handelLogout= ()=>{
        localStorage.setItem("Authenticated", false);
        setCountOut(1);
    }


    if(countOut > 0){
       return <Navigate to={'/login'}  />
    }

    return (
        <Box>
            <Flex bg={'linear-gradient(to right, pink, skyblue)' } position='fixed' w='100%' top={'0'}
             h={{ base: '60px', sm: '60px',  md: '80px', lg: '100px' }} alignItems={'center'} justifyContent={"space-around"} >
            <Text fontSize={{ base: '15px', sm: '15px',  md: '30px', lg: '35px' }}  fontFamily='cursive' fontWeight={'600'} >Contact List Manager</Text>
            <Button onClick={handelLogout}  p={{ base: '10px', sm: '10px',  md: '25px', lg: '25px' }} ><Text fontSize={{ base: '15px', sm: '15px',  md: '20px', lg: '25px' }} fontWeight={'400'} >LogOut</Text></Button>
           </Flex>
           <Box mt={{ base: '60px', sm: '60px',  md: '80px', lg: '100px' }} >
           {/* { base: '65px', sm: '65px',  md: '85px', lg: '105px' } */}
            {
                data.map((el)=>{
                    return (
                        <Box key={el.email} h={'50px'} border={'1px solid grey'}
                         display='flex' justifyContent={'space-around'} alignItems={'center'}   >
                            <Box w={'50%'} >
                            <Text fontSize={{ base: '10px', sm: '10px',  md: '15px', lg: '25px' }} fontWeight='500'  >{el.name.title} {el.name.first} {el.name.last}</Text>
                            </Box>
                            <Box w={'25%'} fontSize={{ base: '10px', sm: '10px',  md: '15px', lg: '25px' }}
                             fontWeight='500' display='flex' justifyContent={'center'} alignItems='center' >
                            <Text>{el.phone}</Text>
                            </Box>
                            <Box w={'25%'} display='flex' justifyContent={'center'} alignItems='center' >
                            <Image src={el.picture.thumbnail} borderRadius='50%' width={{ base: '30px', sm: '30px',  md: '40px', lg: '50px' }} />
                            </Box>

                        </Box>
                    )
                })
            }
           </Box>
            {/* <Button onClick={handelLogout}  p={'25px'} ><Text fontSize={'25px'} fontWeight={'400'} >LogOut</Text></Button> */}
        </Box>
    )
}