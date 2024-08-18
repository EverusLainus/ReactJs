import { Center, Flex } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      justifyItems={"Center"}
      bg="black"
      color={"white"}
      w="100%"
    >
      <span>HOME</span>
      <span>ABOUT</span>
      <span>CONTACT</span>
    </Flex>
  );
};
