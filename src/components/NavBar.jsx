import React from 'react'
import {Menu, MenuButton, MenuList,MenuItem,Flex,Box,Spacer,} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <Flex backgroundColor='bisque'>
            <Box p='4' backgroundColor='rgba(219, 252, 253, 0.946)'borderRadius="10px" >
            <Link to={"/"}>
                
             <h3> joyeria La realeza</h3>
            </Link>

            </Box>
                <Spacer />
            <Box p='4'  backgroundColor='rgba(219, 252, 253, 0.946)'borderRadius="10px">
                <Menu>
                    <MenuButton>
                     Categories
                    </MenuButton>
                    <MenuList>
                        <Link to={"/category/Anillos"}>
                        <MenuItem>Anillos</MenuItem>

                        </Link>
                        <Link to={"/category/Pulseras"}>
                        <MenuItem>Pulseras</MenuItem>

                        </Link>
                        <Link to={"/category/Zarcillos"}>
                        <MenuItem>Zarcillos</MenuItem>


                        </Link>
                    
                    
                   
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            
            <Box p="4" backgroundColor='rgba(219, 252, 253, 0.946)' borderRadius="10px">
                <Link to={"/cart"}>
                
                <CartWidget/>

                </Link>
      
            </Box>
           
        
        </Flex>
    
    </div>
  )
}

export default Navbar