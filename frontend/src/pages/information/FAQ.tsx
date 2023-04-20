import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <Flex direction={"column"} width="68%" m={"90px auto 0px auto"}>
      <Heading textAlign="center" fontWeight={"extrabold"}>
        Frequently Asked Questions
      </Heading>
      <Text fontSize={"sm"} textAlign="center" mt={4} mb={"20"} opacity="40%">
        Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
      </Text>
      <Box width={"80%"} m={"auto"}>
        <Accordion allowToggle>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    What is NFT Marketplace?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, adipisci. Amet delectus in tenetur soluta rem, odit
                  tempora temporibus architecto, adipisci nisi deleniti esse
                  libero eligendi voluptas quo laudantium? Ducimus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    What is a non-fungible token (NFT)?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel fontSize={'sm'} opacity="60%">
                  A non-fungible token, or NFT, is a blockchain-based token that
                  represents the ownership and provenanceof a specific asset,
                  such as an image or video a blockchain-based token that
                  represents the ownership and provenanceof a specific asset,
                  such as an image or video.. 
                  <br /><br />
                  How can I sell an NFT? Please head
                  to your profile page, click List Now on the NFT you want to
                  sell, and then enter the NFT Listing page. Next, please follow
                  the steps below to list your NFT: 1. Choose the pricing token
                  (USDT, BIT, XTZ or ETH). 2. Enter the quantity.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    How can I buy an NFT?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, adipisci. Amet delectus in tenetur soluta rem, odit
                  tempora temporibus architecto, adipisci nisi deleniti esse
                  libero eligendi voluptas quo laudantium? Ducimus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    Customer service is available?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, adipisci. Amet delectus in tenetur soluta rem, odit
                  tempora temporibus architecto, adipisci nisi deleniti esse
                  libero eligendi voluptas quo laudantium? Ducimus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    How can I sell an NFT?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, adipisci. Amet delectus in tenetur soluta rem, odit
                  tempora temporibus architecto, adipisci nisi deleniti esse
                  libero eligendi voluptas quo laudantium? Ducimus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"extrabold"}
                  >
                    How to Deposit Your NFT to Wallet?
                  </Box>
                  {isExpanded ? (
                    <ChevronUpIcon fontSize="24px" />
                  ) : (
                    <ChevronRightIcon fontSize="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, adipisci. Amet delectus in tenetur soluta rem, odit
                  tempora temporibus architecto, adipisci nisi deleniti esse
                  libero eligendi voluptas quo laudantium? Ducimus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Faq;
