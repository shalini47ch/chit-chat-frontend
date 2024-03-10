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
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);
  const[loading,setLoading]=useState(false)
  const toast=useToast()
  const history = useHistory();

  function handleClick() {
    setShow(!show);
  }

  const submitHandler=async()=>{

    setLoading(false);
    if(!email ||!password){
      toast({
        title: "Please fill the required fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",

      })
      setLoading(false)
      return
    }
    
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        {
        
          email,
          password
          
        },
        config
      );
      console.log(data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }


    
  }

  return (
    <VStack spacing="5px">
      {/* <FormControl id="first-name" isRequired>
        <FormLabel  fontSize="sm">Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          size="sm"
        />
      </FormControl> */}

      <FormControl id="email" isRequired>
        <FormLabel fontSize="sm">Email Address</FormLabel>
        <Input
          placeholder="Enter your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          size="sm"
          type="email"
          value={email}
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
            value={password}
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
        isLoading={loading}
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 10 }}
        onClick={()=>{
          setEmail("guest@example.com");
          setPassword("123456")
        }}
        size="sm"
      >
        Get guest credentials
      </Button>
    </VStack>
  );
};
export default Login;
