import React from "react";
import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
const Create = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("green.200", "blue.200");
  const textColor = useColorModeValue("blue.200", "green.200");

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"full"}
      minHeight={"100vh"}
      padding={"10"}
    ></Flex>
  );
};

export default Create;
