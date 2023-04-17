import {
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Flex m={"90px auto 0px auto"} direction="column" width={"68%"}>
      <Heading textAlign="center" fontWeight={"extrabold"}>
        <b>Larcible Privacy Policy</b>
      </Heading>
      <Text fontSize={"sm"} textAlign="center" mt={4} opacity="40%">
        Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
      </Text>
      <Text fontSize={"sm"} opacity="60%" mt={"20"}>
        his Privacy Policy describes how Coinbase Technologies, Inc. (“larcible
        Technologies,” “we”, “us” or “our”) handles personal information that we
        collect through the NFT websites (nft.larcible.com, larcible.com/nft)
        that link to this Privacy Policy, as well as through social media, our
        marketing activities, and other activities described in this Privacy
        Policy (collectively, the “NFT Service”).
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        Privacy policy acceptance
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        By accessing and using the Coinbase NFT Service, you signify acceptance
        to the terms of this Privacy Policy. We may provide additional
        "just-in-time" disclosures about certain data processing practices
        within the Coinbase NFT Service; these disclosures may supplement or
        clarify the privacy practices described here, or may provide you with
        additional choices about how we process your personal information.
      </Text>
      <Text opacity={"60%"} fontSize="sm" mt={3}>
        If you do not agree with or you are not comfortable with any aspect of
        this Privacy Policy, you should immediately discontinue access or use of
        the Larcible NFT Service.
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        The personal information we collect
      </Heading>
      <Text fontSize={"sm"} opacity="60%" mb={3}>
        Information you provide to us. Personal information you may provide to
        us through the Coinbase NFT Service or otherwise includes:
      </Text>
      <UnorderedList spacing={"4"}>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Contact information, such as your first and last name, and email
          address.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Personal Identification Information: Full name, date of birth,
          nationality, gender, signature, phone number, home address.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Formal Identification Information: Government issued identity document
          and photograph such as Passport, Driver's License, National or State
          Identity Card.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Biometric Information: information generated to create a print or
          template of an individual's face or voice, including from a
          photograph.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Financial information, such as your linked virtual currency or wallet
          accounts, stored value accounts, and associated details.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Transactional information, such as information relating to or needed
          to complete non-fungible token (NFT) purchases or sales on or through
          the Coinbase NFT Service which includes transactional details, fees,
          and sales prices.
        </ListItem>
      </UnorderedList>
      <Heading mt={5} mb={7} fontSize="lg" fontWeight="extrabold">
        How your personal information is used
      </Heading>
      <Text fontSize={"sm"} opacity="60%" mb={3}>
        We may use your personal information for the following purposes or as
        otherwise described at the time of collection:
      </Text>
      <UnorderedList spacing={"4"}>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          provide, operate and improve the Coinbase NFT Service and our
          business;
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          establish and maintain your user profile on the Coinbase NFT Service;
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          personalize your experience with the Coinbase NFT Service; and
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          communicate with you about the Coinbase NFT Service, including by
          sending notices, updates, alerts, support and administrative messages,
          and responding to your communications to us.
        </ListItem>
      </UnorderedList>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        Other sites and services
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        Coinbase NFT may contain links to websites, and other online services
        operated by third parties. In addition, our content may be integrated
        into web pages or other online services that are not associated with us.
        These links and integrations are not an endorsement of, or
        representation that we are affiliated with, any third party. We do not
        control websites, mobile applications or online services operated by
        third parties, and we are not responsible for their actions. We
        encourage you to read the privacy policies of the other websites, mobile
        applications and online services you use
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        How to contact us
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        If you have questions or concerns regarding this Privacy Policy, please
        contact us on our sales manager, supports or by writing to us at the
        address of our operating entity (212 2rd Street, #684 Road, CA, 94607).
      </Text>
    </Flex>
  );
};

export default PrivacyPolicy;
