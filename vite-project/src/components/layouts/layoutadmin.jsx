import { Box } from "@chakra-ui/react";
import FormikExample from "../FormLogin";

function LayoutAdmin() {
    return (  <div>
            <Box display="flex"  w="100%">
        <Box >
            <img src="Rectangle 4.png" alt="" width=""/>
        </Box>
        <Box w="70%" alignItems="center" justifyContent="center" display='flex' lineHeight='2'>
       <FormikExample/>
        </Box>
    </Box>
    </div>);
}

export default LayoutAdmin;