import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { WalletCardProps } from "../../helpers/types/propsTypes";
import img from "../../assets/ConnectWallet.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import WalletModal from "./WalletModal";

const WalletCard = ({ name }: WalletCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        direction={"row"}
        py="2"
        pl={"4"}
        bg={"#F8F8F8"}
        _dark={{ bg: "#1D1D1D" }}
        h="24"
        borderRadius={"xl"}
        align={"center"}
        _hover={{ cursor: "pointer" }}
        onClick={onOpen}
      >
        <Box>
          <Image src={img} boxSize="16" objectFit={"contain"} />
        </Box>

        <CardBody>
          <Stack gap={""}>
            <Heading fontSize={"lg"}>{name}</Heading>
            <Text fontSize={"sm"}>
              Antrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ArrowForwardIcon />
        </CardFooter>
      </Card>
      <WalletModal isOpen={isOpen} onClose={onClose} img={img} />
    </>
  );
};

export default WalletCard;
