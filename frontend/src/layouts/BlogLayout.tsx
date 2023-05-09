import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <Container maxW={"82%"} mt="40" centerContent>
      <Outlet />
    </Container>
  );
}
 
export default BlogLayout;