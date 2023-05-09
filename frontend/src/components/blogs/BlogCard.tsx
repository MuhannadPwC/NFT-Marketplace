import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BlogCardProps } from "../../helpers/types/propsTypes";
import img from "../../assets/imageblog.png";
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card p={"3"} borderRadius="xl">
      <Image src={img} objectFit="contain" width={"96"} />
      <CardBody>
        <Stack gap={"1"}>
          <Heading fontSize={"sm"}>{blog.title}</Heading>
          <Text opacity={1} fontSize="2xs">
            Creator <b>{blog.creator}</b>
          </Text>
          <Text fontSize="2xs">{blog.body}</Text>
          <Button
            variant={"outline"}
            fontSize="xs"
            w={"24"}
            h="9"
            as={NavLink}
            to="/blogs/id"
            /* TODO: ADD LINK */
          >
            Read More
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
