import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import WalletCard from "../../components/user/WalletCard";

const ConnectWallet = () => {
  return (
    <Container mt={"40"} maxW="55%">
      <Stack gap={"3"} align="center">
        <Heading>Connect Your Wallet</Heading>
        <Text>Connect with one of your available wallet providers</Text>
      </Stack>
      <Stack gap={"2"} mt="10">
        <WalletCard name="Metamask" />
        <WalletCard name="Bitski" />
        <WalletCard name="Alpha" />
        <WalletCard name="Enjin" />
        <WalletCard name="Wallet Connect" />
        <WalletCard name="CoinBase" />
      </Stack>
    </Container>
  );
};

export default ConnectWallet;
