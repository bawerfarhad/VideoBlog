import {
  Box,
  Flex,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Categories = ({ data }) => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("green.200", "blue.200");

  return (
    <Flex cursor={"pointer"} my={"5"}>
      <Link to={`/category/${data.name}`}>
        <Tooltip
          hasArrow
          placement={"right"}
          closeDelay={"300"}
          label={data.name}
          bg={bg}
          arrowSize={"5"}
        >
          <Box>{data.iconSrc}</Box>
        </Tooltip>
      </Link>
    </Flex>
  );
};

export default Categories;
