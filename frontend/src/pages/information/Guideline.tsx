import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Guideline = () => {
  return (
    <Flex m={"90px auto 0px auto"} direction="column" width={"68%"}>
      <Heading textAlign="center" fontWeight={"extrabold"}>
        <b>Larcible Guidelines</b>
      </Heading>
      <Text fontSize={"sm"} textAlign="center" mt={4} opacity="40%">
        Updated on 2nd December 2021
      </Text>
      <Text fontSize={"sm"} mt={"20"}>
        We want to build a community that empowers creators and collectors
        alike. Creating a new system of support for digital art requires mutual
        respect between creators, collectors, and curators. We hope you can
        embody these ideals and help us work towards building a welcoming
        community.
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        For the community
      </Heading>
      <Text fontSize={"sm"}>
        A community of artists and collectors who share their work and learn
        from each other in shared online spaces like Instagram and Twitter. To
        break from the old and start something truly new, we must be led by
        values of kindness and inclusivity. Anyone who is interested in joining
        our community on a deeper level is welcome to become a member of the
        WazirX NFT team at Discord and Telegram.
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        For Creators
      </Heading>
      <Text fontSize={"sm"} opacity="60%" mb={5}>
        A community of artists and collectors who share their work and learn
        from each other in shared online spaces like Instagram and Twitter. To
        break from the old and start something truly new, we must be led by
        values of kindness and inclusivity. Anyone who is interested in joining
        our community on a deeper level is welcome to become a member of the
        WazirX NFT team at Discord and Telegram.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mb={"3"}>
        However, content or behavior that jeopardizes our users our
        infrastructure, or damages our community is removed including the
        following :
      </Text>
      <UnorderedList spacing={"4"}>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Copyright or trademark infringement- You cannot upload anyone else's
          copyright or otherwise proprietary work
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Shoddy quality work- We want to maintain a good quality of artwork and
          encourage you to evaluate the work before publishing it
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          Violence, mutilation, and gore depiction - Anything illegal such as
          fraud, phishing, inciting violence, or anything else that's against
          the law.
        </ListItem>
        <ListItem opacity={"60%"} fontSize="sm" ml={1}>
          AI Generative Art - Usage of 3rd party apps to create text prompt
          driven images is not allowed. Instead, a traditional.
        </ListItem>
      </UnorderedList>
      <Heading mt={"7"} mb={5} fontSize="lg" fontWeight="extrabold">
        For the collectors
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        Artists in the NFT space are ushering in new cultural paradigms and
        models for arts patronage through their forward-thinking approaches.
        When collectors collect an NFT, they receive a unique NFT from an artist
        they want to support and champion.
      </Text>
      <Text fontSize={"sm"} opacity="60%" mt={3}>
        As a collector you own the NFT that represents the artwork on the
        blockchain. You can display and share the piece, and resell/ trade it on
        a secondary market.
      </Text>
      <Heading mt={5} mb={5} fontSize="lg" fontWeight="extrabold">
        Creating a safe place for the community
      </Heading>
      <Text fontSize={"sm"} opacity="60%">
        If we determine a creator is doing any of these things, we will mediate
        the situation which may include account suspension and in severe cases
        blacklisting of the creator or collector account and if you see any of
        these behaviors on the NFT Marketplace, let us know via reporting and
        reaching us on our{" "}
        <b>
          <u>support page</u>
        </b>
        .
      </Text>
      <Text mt={5} opacity="70%" fontSize={"sm"} fontWeight="extrabold">
        The WazirX NFT report committee can remove any work that violates
        another party's intellectual property rights.
      </Text>
    </Flex>
  );
};

export default Guideline;
