import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import BlogCard from "../../components/blogs/BlogCard";
import { blogs } from "../../helpers/dummyData";

const BlogsList = () => {
  return (
    <>
      <Heading>Larcible NFT Blog</Heading>
      <Text fontSize={"sm"} mt="4">
        Buy and sell NFTs from the world's top artistsBuy
      </Text>
      <SimpleGrid columns={3} spacing={8} mt="12">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </SimpleGrid>
      <Button fontSize={"xs"} w="24" h={10} mt="6">
        Load More
      </Button>
    </>
  );
};

export default BlogsList;
