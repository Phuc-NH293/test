import {  ChakraProvider, Box, Table ,Image, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import BasicUsage from "./comfirmdelete";
import { FcBusinesswoman } from "react-icons/fc";
function TableListUserAdmin() {
    return ( <>
  <ChakraProvider>
      <Table
        d="inline-block"
        border="2px solid"
        borderColor="gray.200"
        // borderRadius="md"
        // rounded="20px"
        w="100%"
        variant="simple"
      >
        <Thead textAlign='center'>
          
            <Th w='80px'>#</Th>
            <Th w="500px">Họ và tên</Th>
            <Th w='300px' isNumeric>Ngày Sinh</Th>
            <Th w='500px'>Liên Hệ</Th>
            <Th w='500px'>Địa Chỉ</Th>
            <Th textAlign='center' w="400px">Hành Động</Th>
         
        </Thead >
        <Tbody textAlign='center'>
          <Tr>
            <Td>1</Td>
            <Td> <Box display='flex'> 
              <Box>
              <Image
  borderRadius='full'
  boxSize='30px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov' 
  
  
/>
                </Box>
                <Box ml="20px">
                <h2>Nguyễn Hồng Phúc</h2>
             
                <Box>
                  <Box display='inline-flex'>
                    <Box>
                    @ok 
                    </Box>
                  <Box mt='10px'>
                  <FcBusinessman />
                  </Box>
                 
                  </Box>
              </Box>                         
              </Box>
                </Box> </Td>
            <Td  isNumeric><Box>
                <span>29/03/2004</span>
      
              </Box>
              <Box fontSize='14px'>
                <span>20 tuổi</span>
      
              </Box></Td>
            <Td>
            <Box>
                  <Box display='inline-flex'>
                  <Box mt='5px'>
                  <BsFillTelephoneFill  />
                  </Box>
                    <Box>
                      <a href="tel"> 0348488416</a>
                   
                    </Box>                
                  </Box>
              </Box>
               <Box>
                  <Box display='inline-flex'>
                  <Box mt='5px'>
                  <MdEmail />
                  </Box>
                    <Box>
                      <a href="maito"> phuccoiby@gmail.com</a>
                   
                    </Box>                     
                  </Box>
              </Box>
              </Td>
            <Td>Mai dịch Cầu Giấy Hà Nội</Td>
            <Td isNumeric>
              <Box display='inline-flex' w='240px'>
              <Box w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center'   _hover={{
    background: "blue",
    color: "#fff",
  }}>
              <GrView />
              </Box>
              <Box ml='20px' w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center'  >
              <FaPencil _groupHover={{ color: "green.500" }}/>
              </Box>
              <Box  ml='20px' w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center' _hover={{
    background: "red",
    color: "#fff",
  }}>
              <MdDelete/>
              </Box>
              </Box>
              </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td> <Box display='flex'> 
              <Box>
              <Image
  borderRadius='full'
  boxSize='30px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov' 
  
  
/>
                </Box>
                <Box ml="20px">
                <h2>Nguyễn Hồng Phúc</h2>
             
                <Box>
                  <Box display='inline-flex'>
                    <Box>
                    @ok 
                    </Box>
                  <Box mt='10px'>
                  <FcBusinesswoman />
                  </Box>
                 
                  </Box>
              </Box>                         
              </Box>
                </Box> </Td>
            <Td  isNumeric><Box>
                <span>29/03/2004</span>
      
              </Box>
              <Box fontSize='14px'>
                <span>20 tuổi</span>
      
              </Box></Td>
            <Td>
            <Box>
                  <Box display='inline-flex'>
                  <Box mt='5px'>
                  <BsFillTelephoneFill  />
                  </Box>
                    <Box>
                      <a href="tel"> 0348488416</a>
                   
                    </Box>                
                  </Box>
              </Box>
               <Box>
                  <Box display='inline-flex'>
                  <Box mt='5px'>
                  <MdEmail />
                  </Box>
                    <Box>
                      <a href="maito"> phuccoiby@gmail.com</a>
                   
                    </Box>                     
                  </Box>
              </Box>
              </Td>
            <Td>Mai dịch Cầu Giấy Hà Nội</Td>
            <Td isNumeric>
              <Box display='inline-flex' w='240px'>
              <Box w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center'   _hover={{
    background: "blue",
    color: "#fff",
  }}>
              <GrView />
              </Box>
              <Box ml='20px' w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center'  >
              <FaPencil _groupHover={{ color: "green.500" }}/>
              </Box>
              <Box  ml='20px' w='40px' h='40px' bg="#CBD5E0" display='flex' alignItems='center' justifyContent='center' _hover={{
    background: "red",
    color: "#fff",
  }}>
              <MdDelete/>
              </Box>
              </Box>
              </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>

        </Tbody>
      
      </Table>
    </ChakraProvider>
</>);
}

export default TableListUserAdmin;