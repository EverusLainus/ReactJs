import { NavBar } from "../components/NavBar";
import { MoneyCardGrid } from "../components/MoneyCard";
import { CountrySales } from "../components/CountrySales";
import { BarSection } from "../components/BarSection";
import { Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import { GraphSection } from "../components/GraphSection";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <br />
      <Heading as="h3" size="lg" textAlign={"left"}>
        GeneralStatistics
      </Heading>
      <br />

      <MoneyCardGrid />
      <br />
      <CountrySales />
      <br />
      <Flex gap={2} justifyContent={"space-between"} h="30vw">
        <BarSection />
        <GraphSection />
      </Flex>
      <br />
    </div>
  );
};
