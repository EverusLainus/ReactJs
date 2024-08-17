import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Heading>Section - 1</Heading>
      <Button colorScheme="blue">Button</Button>
      <Input placeholder="Basic usage" />

      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
