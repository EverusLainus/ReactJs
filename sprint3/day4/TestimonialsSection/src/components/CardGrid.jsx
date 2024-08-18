import { Cards } from "./Cards";

import { Grid } from "@chakra-ui/react";

export const CardGrid = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={6}
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
        border="1px"
      />
    </Grid>
  );
};
