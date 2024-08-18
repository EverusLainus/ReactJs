import React from "react";
("use client");

import {
  Input,
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  BellIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = () => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    ></Box>
  );
};

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/Login");
  };

  return (
    <>
      <Box bg={"none"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>Pages/Default</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Input placeholder="Type Here" />
              {/* sign in button */}
              <Button
                onClick={handleSignUp}
                variant={"solid"}
                colorScheme={"none"}
                size={"sm"}
                mr={4}
                color={"black"}
              >
                Sign In
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                  />
                  <SettingsIcon />
                  <BellIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
