import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"



export const AllRoutes = ()=>{



    return <Box>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
        </Routes>
    </Box>

}