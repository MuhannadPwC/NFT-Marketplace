import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, StackDivider, Text, VStack } from "@chakra-ui/react";

const CommunityPopover = () => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text fontSize={"sm"}>
          Community <ChevronDownIcon />
        </Text>
      </PopoverTrigger>
      <PopoverContent w={'150px'} h="200px" borderRadius='8px'>
        <PopoverArrow />
        <PopoverBody>
          <VStack align={'flex-start'} justify='space-evenly' height={'180px'}>
            <Link href={'https://www.twitter.com/'} isExternal>Twitter</Link>
            <Link href={'https://web.telegram.org/k/'} isExternal>Telegram</Link>
            <Link href={'https://web.whatsapp.com/'} isExternal>Whatsapp</Link>
            <Link href={'https://discord.com/'} isExternal>Discord</Link>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CommunityPopover;
