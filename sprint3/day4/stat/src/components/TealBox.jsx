import { Avatar, Box, Text, Flex, Grid, Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export const TealBox = ({ icon }) => {
  return (
    <Box
      bg="teal"
      borderRadius={5}
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={icon} w={6} h={6} color="white" />
    </Box>
  );
};
