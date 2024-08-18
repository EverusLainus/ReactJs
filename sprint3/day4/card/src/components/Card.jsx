import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Stack,
  Image,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";

export const Cards = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="image.png"
          alt="Green double couch with wooden legs"
          borderRadius="full"
          w={150}
          h={150}
          margin={"auto"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Lindsey James</Heading>
          <Text color="grey" fontSize="sm">
            @lindsey_james
          </Text>
          <Text>
            Actress, musician, songwriter and artist. PM for work inquires{" "}
            <br />
            or <br />
            <Text color="blue.600" fontSize="xl">
              tag
            </Text>
            me in your posts
          </Text>
        </Stack>
        <br />
        <Flex gap={3}>
          <Button
            fontSize="sm"
            colorScheme="gray"
            color={"black"}
            borderRadius={10}
          >
            #ART
          </Button>
          <Button
            fontSize="sm"
            colorScheme="gray"
            color={"black"}
            borderRadius={10}
          >
            #PHOTOGRAPHY
          </Button>
          <Button
            fontSize="sm"
            colorScheme="gray"
            color={"black"}
            borderRadius={10}
          >
            #MUSIC
          </Button>
        </Flex>
      </CardBody>

      <CardFooter>
        <Flex justifyContent="space-between" gap={38} paddingX={10}>
          <Button
            colorScheme="gray"
            color={"black"}
            w={100}
            borderRadius={15}
            padding={4}
          >
            Message
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            w={100}
            borderRadius={15}
            padding={4}
          >
            Follow
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};
