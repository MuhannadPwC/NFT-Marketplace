import {
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const WalletModal = ({ isOpen, onClose, img }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent mt={"40"} borderRadius="3xl" px={"12"}>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Stack align={"center"} gap="4">
            <Image src={img} objectFit="contain" boxSize={"32"} />
            <Heading
              bgGradient={
                "linear(to-r, Main 0.53%, #7185D0 29.11%, #F5A8A4 78.24%)"
              }
              bgClip="text"
            >
              Wallet Connected
            </Heading>
            <Stack align="center">
              <Heading fontSize={"2xl"}>0.1221 ETH</Heading>
              <Text fontSize={"sm"}>$693.22</Text>
              <Text fontSize={"sm"}>Your wallet is now connected</Text>
            </Stack>
            <Button w={"70%"} fontSize="xs" as={NavLink} to="/">
              {" "}
              {/* TODO: ADD LINK */}
              Get Started Now
            </Button>
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WalletModal;
