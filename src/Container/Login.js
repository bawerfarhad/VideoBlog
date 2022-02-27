import { Flex, Image, HStack, Button } from "@chakra-ui/react"; // css framework
import React from "react";
import image from "../Images/music.jfif";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// working with firebase authentication
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../Firebase-Config";
// working with firebase authentication

//Working with fireStore
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../Firebase-Config";
//Working with fireStore

const Login = () => {
  const navigate = useNavigate();
  // login credential's
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(firebaseApp);
  const login = async () => {
    const { user } = await signInWithPopup(authentication, provider);
    const { refreshToken, providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    await setDoc(
      doc(firebaseDb, "users", providerData[0].uid),
      providerData[0]
    );
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        position={"relative"}
      >
        <Image src={image} objectFit="cover" width={"full"} height={"full"} />
        <Flex
          position={"absolute"}
          width={"100vw"}
          height={"100vh"}
          bg={"blackAlpha.600"}
          top={"0"}
          left={"0"}
          justifyContent={"center"}
          align-items={"center"}
        >
          <HStack>
            <Button
              leftIcon={
                <FcGoogle
                  fontSize={"25"}
                  colorscheme="whiteAlpha"
                  shadow={"lg"}
                  onClick={() => login()}
                />
              }
            >
              Sign in with Google
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </div>
  );
};

export default Login;
