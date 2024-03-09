import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="lg" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        bg="white"
        p={3}
        w="100%"
        m="10px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="xl" fontFamily="Work sans">
          Chit-Chat
        </Text>
      </Box>

      <Box bg="white" p={4} w="100%" borderWidth="1px" borderRadius="md">
        <Tabs isFitted variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default HomePage;
