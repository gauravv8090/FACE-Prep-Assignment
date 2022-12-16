import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { PrivateRoute } from "./PrivateRoute"



export const AllRoutes = ()=>{



    return <Box>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
            
            <Route path="/login" element={<Login/>} ></Route>
        </Routes>
    </Box>

}