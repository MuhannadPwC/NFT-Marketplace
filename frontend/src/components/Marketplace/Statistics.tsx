import { Flex, Icon, Text } from "@chakra-ui/react";
import { StatisticsProps } from "../../helpers/types/propsTypes";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { RxShare2 } from "react-icons/rx";
import { IoIosRefresh } from 'react-icons/io';
import { thousandToK } from "../../helpers/functions/helperFunctions";

const Statistics = ({ views, likes }: StatisticsProps) => {
  views = thousandToK(views);
  likes = thousandToK(likes);

  return (
    <Flex justify={"center"} align="center" mt={"5"} gap="6">
      <Flex align={"center"} gap="1.5">
        <Icon as={AiOutlineEye} boxSize={"5"} />
        <Text opacity={1}>{views.toString()}</Text>
      </Flex>
      <Flex align={"center"} gap="1.5">
        <Icon as={BsFillHeartFill} boxSize={"4"} color="negative" />
        <Text opacity={1}>{likes.toString()}k</Text>
      </Flex>
      <Flex align={"center"} gap="1.5">
        <Icon as={RxShare2} boxSize={"4"} />
        <Text opacity={1}>Share</Text>
      </Flex>
      <Flex align={"center"} gap="1.5">
        <Icon as={IoIosRefresh} boxSize={"4"} />
        <Text opacity={1}>Refresh</Text>
      </Flex>
    </Flex>
  );
};

export default Statistics;
