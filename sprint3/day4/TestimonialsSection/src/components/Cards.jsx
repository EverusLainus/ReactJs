import React from "react";
import { Box, Grid, Text, Heading, Avatar, Stack } from "@chakra-ui/react";

const Cards = ({ heading, des, name, position }) => (
  <Box
    bg="white"
    boxShadow="lg"
    p={8}
    rounded="xl"
    textAlign="center"
    pos="relative"
    border={"1px solid black"}
  >
    <Heading as="h3" fontSize="xl" mb={4}>
      {heading}
    </Heading>
    <Text color="gray.600" mb={6}>
      {des}
    </Text>
    <Stack align="center">
      <Avatar mb={2} />
      <Text fontWeight={600}>{name}</Text>
      <Text fontSize="sm" color="gray.600">
        {position}
      </Text>
    </Stack>
  </Box>
);

export const CardGrid = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={10}
    >
      <Cards
        heading="lorem"
        des="Autem illo perspiciatis quas quisquam esse, alias repellendus atque."
        name="George"
        position="CEO"
      />
      <Cards
        heading="Sunt"
        des="Sunt, tempore fugiat? Sint eligendi impedit atque eaque, praesentium."
        name="Henneth"
        position="CEO"
      />
      <Cards
        heading="Possimus"
        des="Possimus harum ab odio repellendus deserunt similique laboriosam."
        name="Goldwin"
        position="CEO"
      />
      <Cards
        heading="Aliquam"
        des="Aliquam fugiat beatae atque distinctio exercitationem."
        name="Naina"
        position="CEO"
      />
      <Cards
        heading="Similique"
        des="Similique ab vitae totam optio non deleniti ratione voluptate."
        name="Liam"
        position="CEO"
      />
      <Cards
        heading="Lorem"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        name="Jude"
        position="CEO"
      />
    </Grid>
  );
};
