import React from "react";
import logo_light from "../Images/logo light.png";
import logo_dark from "../Images/logo dark.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Flex,
  useColorMode,
  useColorModeValue,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import {
  IoAdd,
  IoLogOut,
  IoMoon,
  IoPerson,
  IoSearch,
  IoSunny,
} from "react-icons/io5";
const Navbar = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("green.200", "blue.900");
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      bg={bg}
    >
      <Link to={"/"}>
        <Image
          src={colorMode == "light" ? logo_dark : logo_light}
          width={"90px"}
        />
      </Link>
      <InputGroup mx={"6"} width={"60vw"}>
        <InputLeftElement
          pointerEvents={"none"}
          children={<IoSearch fontSize={"25"} />}
        />
        <Input
          type="text"
          placeholder="Search"
          fontSize={"18"}
          fontWeight={"medium"}
          variant={"filled"}
        />
      </InputGroup>
      <Flex mr={"10px"} justifyContent={"center"} alignItems={"Center"}>
        <Flex
          width={"40px"}
          height={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          borderRadius={"5px"}
          onClick={toggleColorMode}
        >
          {colorMode == "light" ? (
            <IoMoon fontSize={"25"} />
          ) : (
            <IoSunny fontSize={"25"} />
          )}
        </Flex>
        <Flex>
          <Link to={"/create"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              bg={bg}
              width={"40px"}
              height={"40px"}
              borderRadius={"5px"}
              mx={"6"}
              cursor={"pointer"}
              _hover={{ shadow: "md" }}
              transition={"ease-in-out"}
              transitionDuration={"0.3s"}
            >
              <IoAdd
                fontSize={"25px"}
                color={`${colorMode == "light" ? "#000" : "#f1f1f1"}`}
              />
            </Flex>
          </Link>
        </Flex>
        <Menu>
          <MenuButton>
            <Image
              src={user?.photoURL}
              width={"40px"}
              height={"40px"}
              rounded={"full"}
            />
          </MenuButton>
          <MenuList shadow="">
            <Link to="">
              <MenuItem flexDirection={"row"} alignItems={"center"} gap={"4"}>
                <IoPerson fontSize={"20"} />
                My Account
              </MenuItem>
            </Link>
            <MenuItem flexDirection={"row"} alignItems={"center"} gap={"4"}>
              <IoLogOut fontSize={"20"} />
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
