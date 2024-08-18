import {
  Avatar,
  Box,
  Text,
  Flex,
  Grid,
  Image,
  Heading,
} from "@chakra-ui/react";
import { TealBox } from "./TealBox";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

export const GraphSection = () => {
  return (
    <Box bg="white" borderRadius={2} w="50%">
      <Heading as="h4" size="md">
        Sales Overview
      </Heading>
      <Heading as="h4" size="sm">
        5% more in 2021
      </Heading>
      <br />
      <Image src="../assets/image.png" alt="image" />
    </Box>
  );
};
