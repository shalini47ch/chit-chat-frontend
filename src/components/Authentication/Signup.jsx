import { VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  const postDetails = (pics) => {};

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel  fontSize="sm">Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          size="sm"
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel  fontSize="sm">Email Address</FormLabel>
        <Input
          placeholder="Enter your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          size="sm"
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel  fontSize="sm">Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            size="sm"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} style={{marginBottom:"10px"}}>
              {!show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel  fontSize="sm">Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmpassword(e.target.value)}
            size="sm"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} style={{marginBottom:"10px"}}>
              {!show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Upload picture logic */}
      <FormControl id="pic">
        <FormLabel  fontSize="sm">Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.value[0])}
          size="sm"
        />
      </FormControl>

      {/*Signup button logic */}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 10 }}
        onClick={submitHandler}
        size="sm"
      >
        Sign Up
      </Button>
    </VStack>
  );
};
export default Signup;
