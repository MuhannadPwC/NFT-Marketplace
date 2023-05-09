import {
  Card,
  CardBody,
  InputGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

const Filters = () => {
  return (
    <Card mt={"20"} borderRadius="none" _dark={{ bg: "#1D1D1D" }}>
      <CardBody>
        <Stack gap={"2"}>
          <Text fontWeight={"600"} fontSize="2xs">
            Price Range
          </Text>
          <Slider aria-label="price-range" min={0} max={20}>
            <SliderMark value={0} fontSize="2xs" fontWeight={"700"} mt="2">
              0.00 ETH
            </SliderMark>
            <SliderMark
              value={20}
              fontSize="2xs"
              fontWeight={"700"}
              mt="2"
              ml={"-9"}
            >
              20 ETH
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack _dark={{ bg: "Main" }} />
            </SliderTrack>
            <SliderThumb bg={"Main"} />
          </Slider>
        </Stack>
        <Stack mt={"12"}>
          <Text fontWeight={"600"} fontSize="2xs">
            Currency
          </Text>
          <Select size={"sm"} borderRadius="lg" fontSize={"2xs"} placeholder="Select currency">
            <option value={"ETH"}>ETH</option>
            <option value={"RARE"}>RARE</option>
          </Select>
        </Stack>
        <Stack mt={"5"}>
          <Text fontWeight={"600"} fontSize="2xs">
            Collection
          </Text>
          <Select size={"sm"} borderRadius="lg" fontSize={"2xs"} placeholder="Select collection">
            <option value={"Genesis"}>FCD Genesis NFT</option>
            <option value={"TwitterScan"}>TwitterScan Pass</option>
            <option value={"Lofi"}>LOFI Pods NFT</option>
          </Select>
        </Stack>
        <Stack mt={"5"}>
          <Text fontWeight={"600"} fontSize="2xs">
            Type
          </Text>
          <Select size={"sm"} borderRadius="lg" fontSize={"2xs"} placeholder="Select type">
            <option value={"No Time Limit"}>No Time Limit</option>
            <option value={"Limited Time"}>Limited Time Only</option>
          </Select>
        </Stack>
        <Stack mt={"5"}>
          <Text fontWeight={"600"} fontSize="2xs">
            Status
          </Text>
          <Select size={"sm"} borderRadius="lg" fontSize={"2xs"} placeholder="Select status">
            <option value={"All"}>All</option>
            <option value={"Buy Now"}>Buy Now</option>
            <option value={"Live Auction"}>Live Auction</option>
            <option value={"Bid Now"}>Bid Now</option>
          </Select>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Filters;
