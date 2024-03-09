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

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

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
        <FormLabel fontSize="sm">Email Address</FormLabel>
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

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 10 }}
        onClick={submitHandler}
        size="sm"
      >
        Get user Credentials
      </Button>
    </VStack>
  );
};
export default Login;
