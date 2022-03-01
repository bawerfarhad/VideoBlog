import React, { useState } from "react";
import { Category } from "../Data";
import {
  Flex,
  useColorMode,
  useColorModeValue,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Text,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
const Create = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("green.200", "blue.200");
  const textColor = useColorModeValue("blue.200", "green.200");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Choose a Category");
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"full"}
      minHeight={"100vh"}
      padding={"10"}
    >
      <Flex
        width={"80%"}
        hight={"full"}
        border={"1px"}
        borderColor={"grey.300"}
        borderRadius={"md"}
        p={"4"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2"}
      >
        <Input
          variant={"flushed"}
          placeholder={"title"}
          focusBorderColor={"grey.400"}
          isRequired
          errorBorderColor={"red"}
          type={"text"}
          _placeholder={{ color: "grey.500" }}
          fontSize={"20"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Flex
          justifyContent={"space-between"}
          width={"full"}
          alignItems={"center"}
          gap={"8"}
          my={"4"}
        >
          <Menu>
            <MenuButton
              width={"full"}
              colorScheme={"blue"}
              as={Button}
              rightIcon={<IoChevronDown fontSize={"25"} />}
            >
              {category}
            </MenuButton>
            <MenuList zIndex={"101"} width={"md"} shadow={"x1"}>
              {Category &&
                Category.map((data) => (
                  <MenuItem
                    key={data.id}
                    _hover={{ bg: "blackAlpha.300" }}
                    fontSize={"20"}
                    px={"4"}
                    onClick={() => setCategory(data.name)}
                  >
                    {data.iconSrc}
                    {""}
                    <Text fontSize={"18"} ml={"4"}>
                      {data.name}
                    </Text>
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Create;
