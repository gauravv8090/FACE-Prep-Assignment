import { Box, Button, Input, Text, } from "@chakra-ui/react"
import { useState } from "react"



export const Login = ()=>{

    const [ user, setUser ] = useState()



    return (
        <Box w={'100%'} height={'100vh'} border={'1px solid teal'} display={'flex'} alignItems='center' >
        <Box w={'600px'} height={'400px'}  margin="auto" boxShadow={'2xl'} display='flex' flexDirection={'column'}  >
            <Text fontWeight={'700'} fontSize='40px' mt='10px'  >Login</Text>
            <Input w={'60%'} m='20px auto' placeholder="Enter Name" mt={'50px'} />
            <Input w={'60%'} m='20px auto' placeholder="Enter Password"  />
            <Button w={'40%'} m='20px auto' >Submit</Button>
        </Box>
        </Box>
    )
}