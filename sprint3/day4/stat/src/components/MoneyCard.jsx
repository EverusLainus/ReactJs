import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { TealBox } from "./TealBox";

// eslint-disable-next-line react/prop-types
export const MoneyCard = ({ t1, t2 }) => {
  return (
    <Box bg="white" h="60px" borderRadius={4}>
      <Flex justifyContent={"space-between"} padding={2}>
        <Flex direction={"column"}>
          <Text fontSize="md">{t1}</Text>
          <Text color="black" fontSize="md">
            {t2}
          </Text>
        </Flex>
        <TealBox icon={CopyIcon} />
      </Flex>
    </Box>
  );
};

export const MoneyCardGrid = () => {
  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" gap={10} marginRight="30vw">
        <MoneyCard t1="Today's Money" t2="$53,000" />
        <MoneyCard t1="Today's Users" t2="2,300" />
        <MoneyCard t1="New Clients" t2="+3,020" />
        <MoneyCard t1="Total Sales" t2="$173,000" />
      </Grid>
    </div>
  );
};
