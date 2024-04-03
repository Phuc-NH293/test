import {Box } from "@chakra-ui/react"
import Form from "./FormLogin";

function Login() {
    return ( <>
    <Box display="flex"  w="100%">
        <Box >
            <img src="Rectangle 4.png" alt="" width=""/>
        </Box>
        <Box w="70%" alignItems="center" justifyContent="center" display='flex' lineHeight='2'>
        <Form/>
        </Box>
    </Box>

    </> );
}

export default Login;