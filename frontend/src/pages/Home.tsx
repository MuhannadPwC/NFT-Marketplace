import { Box, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Headline from "../components/Home/Headline";
import NftScroller from "../components/Home/NftScroller";

const Home = () => {

  return (
    <Box width={'82%'} m="auto">
      <SimpleGrid columns={2} spacing="8">
        <Headline />
        <NftScroller />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
