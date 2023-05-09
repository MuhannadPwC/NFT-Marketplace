import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import BidCard from "./BidCard";

const NftTabs = () => {
  return (
    <Tabs mt={"5"}>
      <TabList>
        <Tab fontSize={"xs"}>Bid History</Tab>
        <Tab fontSize={"xs"}>Info</Tab>
        <Tab fontSize={"xs"}>Price History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BidCard />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NftTabs;
