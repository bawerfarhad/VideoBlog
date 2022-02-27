import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Categories,
  Navbar,
  Feed,
  Create,
  VideoPin,
  Search,
} from "../Component/index";
import { Routes, Route } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"20"}
      >
        <Categories />
      </Flex>
      <Flex
        width={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        px={"4"}
      >
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/videoDetail" element={<VideoPin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Flex>
    </>
  );
};

export default Home;
