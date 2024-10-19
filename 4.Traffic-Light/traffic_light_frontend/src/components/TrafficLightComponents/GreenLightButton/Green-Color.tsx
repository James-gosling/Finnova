import React, { useState } from "react";
import { useAccount, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useSailsCalls } from "@/app/hooks";
import { SailsCommandOptions } from "@/app/SailsCalls";

function GreenColor() {
  const sails = useSailsCalls();
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputAmount, setInputAmount] = useState(''); // Estado para la cantidad ingresada
  const modalContent = "Ahorro"; // Texto dinámico para el modal

  const handleConfirmTransaction = async () => {
    if (!accounts) {
      alert.error("Accounts is not ready");
      return;
    }

    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      if (!sails) {
        alert.error("sails is not ready");
        return;
      }

      if (!account || !accounts) {
        alert.error("Account is not ready");
        return;
      }

      const { signer } = await web3FromSource(accounts[0].meta.source);
      let options: SailsCommandOptions;

      // Convertir la cantidad ingresada a BigInt
      const amountToSend = BigInt(inputAmount);

      const response = await sails.command(
        "TrafficLight/Green",
        {
          userAddress: account.decodedAddress,
          signer,
        },
        {
          callbacks: {
            onLoad() {
              alert.info("Will send a message");
            },
            onBlock(blockHash) {
              alert.success(`In block: ${blockHash}`);
            },
            onSuccess() {
              alert.success("Message sent!");
            },
            onError() {
              alert.error("Error while sending message");
            },
          },
          tokensToSend: 2000n // Usar la cantidad ingresada por el usuario
        }
      );

      console.log(`response: ${response}`);
      onClose(); // Cerrar el modal después de confirmar
    } else {
      alert.error("Account not available to sign");
    }
  };

  return (
    <>
      <Button backgroundColor="green.300" onClick={onOpen}>
        Ahorro
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`Confirmar ${modalContent}`}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl>
              <FormLabel>{`Cantidad a ${modalContent.toLowerCase()}`}</FormLabel>
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
    </>
  );
}

export { GreenColor };
