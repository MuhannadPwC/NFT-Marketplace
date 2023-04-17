import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Flex m={"90px auto 0px auto"} direction="column" width={"68%"}>
      <Heading textAlign="center" fontWeight={"extrabold"}>
        <b>Terms of Service</b>
      </Heading>
      <Text fontSize={"sm"} textAlign="center" mt={4} opacity="40%">
        Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
      </Text>
      <Text fontSize={"sm"} opacity="60%" mt={"20"} mb={4}>
        These Supplemental Terms (“Supplemental Terms”) supplement the Terms and
        Conditions (“Terms”) for the Platform provided by Bybit Fintech Limited
        (“we”, “us” or “our”). These Supplemental Terms together with the Terms
        governs transactions for NFTs made through the Platform. In the event of
        any conflict between these Supplemental Terms and the Terms, the Terms
        will prevail.
      </Text>
      <Text fontSize={"sm"} opacity="60%">
        By listing, selling, buying or trading NFTs through the Platform, you
        agree to and are bound by both these Supplemental Terms and the Terms
        for the Platform. If you do not agree to the Supplemental Terms or the
        Terms for the Platform, you may not list, sell, buy or trade NFTs
        through the Platform.
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        License to use your content
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        “Art” means any art, design, or drawings (in any form or media,
        including, without limitation, video or photographs) that may be
        associated with a Licensed NFT. "NFT" means any blockchain-tracked,
        non-fungible token, such as those conforming to the ERC-721 and ERC 1155
        standards or otherwise designed by the Platform.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mt={4}>
        “Licensed NFT” means an NFT that is posted and made available on the
        Platform for a Transaction.“Licensor” means a third party that owns or
        is the licensor of the Art in the Licensed NFT
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        Our content and the content of others
      </Heading>
      <Text fontSize={"sm"} opacity="60%" mb={4}>
        “Third Party IP” means any third-party patent rights (including, without
        limitation, patent applications and disclosures), copyrights, trade
        secrets, trademarks, know-how, rights of publicity (e.g. of another
        person's name and likeness), right of privacy or any other intellectual
        property rights recognized in any country or jurisdiction in the world.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mb={4}>
        “Transaction” means any listing, purchase, sale or trade of a Licensed
        NFT through the Platform.Eligibility. To conduct a Transaction regarding
        Licensed NFTs, you must meet the criteria for eligibility to use the
        Platform and have an Account in good standing with the Platform.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mb={4}>
        Listing and Selling of Licensed NFTs. We may list our own Licensed NFTs
        or allow users to list their Licensed NFTs for Transactions through the
        Platform. You can only list a Licensed NFT if you have the rights to
        grant the license to the Licensed NFT set forth in Section 7.c. hereof
        or purchased the Licensed NFT through the Platform or other legitimate
        source validated by us. You agree to any listing policies we may
        implement for Licensed NFTs. You may not list or conduct a Transaction
        regarding a Licensed NFT that violates Section 12.2 or any other
        provision of the Terms.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mb={4}>
        Please check these Terms periodically for changes. Any changes to the
        Supplemental Terms will apply on the date that they are made and, by way
        of example, your continued access to or use of the Licensed NFT after
        the Supplemental Terms have been updated will constitute your binding
        acceptance of the updates.
      </Text>
    </Flex>
  );
};

export default TermsOfService;

/* 












*/
