import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../../assets/brand-logo.svg";

const Brand = () => {
  return (
    <VStack gap={'4px'}>
      <Image src={logo}/>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
        industry. Lorem Ipsum has Upsum.Lorem Ipsum is <br /> simply dummy text
        of the printing and typesetting industry.
      </Text>
    </VStack>
  );
};

export default Brand;
