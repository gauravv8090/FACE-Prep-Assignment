import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { PrivateRoute } from "./PrivateRoute"



export const AllRoutes = ()=>{



    return <Box>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
        </Routes>
    </Box>

}