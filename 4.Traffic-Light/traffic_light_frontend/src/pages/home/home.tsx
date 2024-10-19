import { Center, VStack, HStack, Box, Icon, Text, Button, Badge, Alert, AlertIcon, Tooltip, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Progress } from '@chakra-ui/react';
import { GreenColor, RedColor, YellowColor, TrafficLightReadState } from "@/components";
import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { FaPiggyBank, FaHandHoldingUsd, FaGift, FaArrowUp, FaTrophy } from "react-icons/fa"; // Iconos adicionales
import { useState } from "react";

export const Home = () => {
  const ahorroProgreso = 40; // Ejemplo de progreso de ahorro
  const toast = useToast(); // Para alertas dinámicas
  const { isOpen, onOpen, onClose } = useDisclosure(); // Para el modal
  const [modalContent, setModalContent] = useState(""); // Para determinar el contenido del modal
  const [inputAmount, setInputAmount] = useState(""); // Almacena la cantidad ingresada
  const [totalAhorro, setTotalAhorro] = useState("$0.00"); // Estado para el total de ahorro

  const updateTotalAhorro = (amount) => {
      setTotalAhorro(amount);
    };

  // Función que se ejecuta cuando se confirma la transacción
  const handleConfirmTransaction = () => {  
    onClose(); // Cierra el modal
    toast({
      title: "Transacción exitosa.",
      description: `Has completado la transacción con la cantidad de ${inputAmount}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setInputAmount(""); // Resetea el input
  };
  

  // Función para abrir el modal dependiendo del botón presionado
  const openModal = (type) => {
    if (type === "green") {
      setModalContent("Depósito");
    } else if (type === "yellow") {
      setModalContent("Préstamo");
    } else if (type === "red") {
      setModalContent("Incentivo");
    }
    onOpen();
  };

  return (
    <Center mb="200px">
      <VStack spacing={8} align="center" width="100%">

        {/* Notificación superior para información adicional */}
        <Alert status="info" variant="subtle" borderRadius="md" maxW="80%">
          <AlertIcon />
          Promoción activa: ¡Recibe un 5% adicional por depósitos mayores a $500 en VARA!
        </Alert>

        {/* Cuadro de datos reposicionado */}
        <HStack spacing={8} justify="center" width="100%" overflow="hidden">
          <StatGroup>
            <Stat>
              <StatLabel fontSize="lg" fontWeight="bold">Ahorro Total</StatLabel>
              <StatNumber fontSize="3xl">{totalAhorro}</StatNumber>
              <StatHelpText color="gray.500">Actualizado hoy</StatHelpText>
            </Stat>
          </StatGroup>
        </HStack>

        {/* Distribuir los acordeones en una fila horizontal ocupando todo el ancho */}
        <HStack spacing={8} justify="center" width="100%" overflow="hidden" minHeight="150px">
          
          {/* Acordeón para "Depósitos y ahorro" */}
          <Accordion allowToggle flex="1" maxW="400px" minHeight="150px" boxShadow="lg" borderRadius="20px">
            <AccordionItem borderRadius="20px">
              <h2>
                <AccordionButton
                  h="150px"
                  fontSize="30px"
                  fontFamily="Poppins, sans-serif" // Cambio de fuente
                  color="black"
                  bg="#08fcc4"
                  _hover={{ bg: "#05b089", color: "black" }}
                  w="100%"
                  borderRadius="20px"
                >
                  <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center" >
                    <Icon as={FaPiggyBank} w={6} h={6} mr={2} /> {/* Icono Depósitos */}
                    Depósitos y ahorro
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" bg="#333333" color="white" borderRadius="12px">
                Aquí puedes gestionar tus depósitos y ahorros en la plataforma.
                <Box display="flex" justifyContent="center" mt={8}>
                  <GreenColor />
                </Box>
                {/* Agregar un botón para acción adicional */}
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button colorScheme="teal" size="lg" onClick={() => openModal("green")}>Realizar Depósito</Button>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Acordeón para "Préstamos y liquidación" */}
          <Accordion allowToggle flex="1" maxW="400px" minHeight="150px" boxShadow="lg" borderRadius="20px">
            <AccordionItem>
              <h2>
                <AccordionButton
                  h="150px"
                  fontSize="30px"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  bg="#08fcc4"
                  _hover={{ bg: "#05b089", color: "black" }}
                  w="100%"
                  borderRadius="20px"
                >
                  <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center">
                    <Icon as={FaHandHoldingUsd} w={6} h={6} mr={2} /> {/* Icono Préstamos */}
                    Préstamos y liquidación
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" bg="#333333" color="white" borderRadius="12px">
                Aquí puedes solicitar préstamos y ver opciones de liquidación.
                <Text mt={4}>Límite de préstamos: $10,000 USD</Text>
                <Box display="flex" justifyContent="center" mt={4}>
                  <YellowColor />
                </Box>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button colorScheme="purple" size="lg" onClick={() => openModal("yellow")}>Solicitar Préstamo</Button>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Acordeón para "Incentivos con VARA" */}
          <Accordion allowToggle flex="1" maxW="400px" minHeight="150px" boxShadow="lg" borderRadius="20px">
            <AccordionItem>
              <h2>
                <AccordionButton
                  h="150px"
                  fontSize="30px"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  bg="#08fcc4"
                  _hover={{ bg: "#05b089", color: "black" }}
                  w="100%"
                  borderRadius="20px"
                >
                  <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center">
                    <Icon as={FaGift} w={6} h={6} mr={2} /> {/* Icono Incentivos */}
                    Incentivos con VARA
                    
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" bg="#333333" color="white" borderRadius="12px">
                Aquí puedes obtener información sobre los incentivos del token VARA.
                <Box display="flex" justifyContent="center" mt={4}>
                  {<RedColor />}
                </Box>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button colorScheme="yellow" size="lg" onClick={() => openModal("red")}>Reclamar Incentivos</Button>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </HStack>

        {/* Progreso de Ahorros con Tooltip */}
        <VStack spacing={8} align="center">
          <Box w="100%" maxW="400px" mt={8}>
            <Tooltip label={`Has alcanzado el ${ahorroProgreso}% de tus ahorros`} fontSize="md">
              <Text mb={4} fontWeight="bold" fontSize="lg">Progreso de tus ahorros <Icon as={FaArrowUp} /></Text>
            </Tooltip>
            <Progress
              colorScheme={ahorroProgreso < 50 ? "yellow" : "green"} // Cambio de color dinámico
              size="lg"
              value={ahorroProgreso}
              hasStripe
              isAnimated
            />
            {ahorroProgreso >= 100 && (
              <Text mt={2} color="green.400" fontWeight="bold">
                ¡Felicidades! Has completado tu meta <Icon as={FaTrophy} />
              </Text>
            )}
          </Box>

          {/* Modal para cantidad y confirmación */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{`Confirmar ${modalContent}`}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Cantidad a {modalContent.toLowerCase()}</FormLabel>
                  <Input
                    placeholder="Ingresa la cantidad"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleConfirmTransaction}>
                  Confirmar
                </Button>
                <Button variant="ghost" onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </VStack>
    </Center>
  );
};
