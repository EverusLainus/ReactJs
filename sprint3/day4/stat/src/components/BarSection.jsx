import { Avatar, Box, Text, Flex, Grid, Image } from "@chakra-ui/react";
import { TealBox } from "./TealBox";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

export const BarSection = () => {
  return (
    <Box bg="white" borderRadius={4} w="50%">
      <Flex direction={"column"} justifyContent={"space-between"}>
        <Image src="../assets/barDiagram.png" alt="image" />
        <Flex justifyContent={"space-between"}>
          <TealBox icon={AddIcon} />
          <TealBox icon={EmailIcon} />
          <TealBox icon={AddIcon} />
          <TealBox icon={EmailIcon} />
        </Flex>
      </Flex>
    </Box>
  );
};
