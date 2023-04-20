import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

const NftScroller = () => {
  return (
    <Box h={"600px"} bg="Main" className="gradient-scroller">
      <Grid h={"100%"} templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
        <GridItem bg={"Kiss"}></GridItem>
      </Grid>
    </Box>
  );
};

export default NftScroller;
