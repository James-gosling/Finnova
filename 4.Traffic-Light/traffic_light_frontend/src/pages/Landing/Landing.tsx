import { Center, VStack } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
function Landing() {
  return (
    <Center>
      <VStack >

      <FormControl isRequired>
            
            {/* Botón más grande permanece al lado de la imagen */}
            <Box>
            <Button colorScheme="teal" h="70px" w="450px" top="300px" fontSize="40" color="black" as={Link} to="/home" bg="#08fcc4" _hover={{ bg: "#000000" ,color:"white"}} >Iniciar sesión</Button>
            </Box>

            <VStack spacing={4} align="flex-start" width="100%"></VStack>
              <FormLabel fontSize={"lg"} >Email address</FormLabel>
                <Input type='email'size="lg" h="50px" w="400px"/>
            <FormHelperText fontSize={"md"}>Enter your email.</FormHelperText>
            
        </FormControl>
          
      <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Select country'>
              <option>United Arab Emirates</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>France</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Australia</option>
              <option>India</option>
              <option>China</option>
              <option>Japan</option>
              <option>South Korea</option>
              <option>Mexico</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
      </VStack>  
    </Center>
  );
}

export { Landing };
