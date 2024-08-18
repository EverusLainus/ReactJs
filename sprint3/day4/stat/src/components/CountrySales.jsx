import {
  TableContainer,
  Thead,
  Th,
  Table,
  Tr,
  Tbody,
  Td,
  TableCaption,
  Tfoot,
  Heading,
  Box,
} from "@chakra-ui/react";
export const CountrySales = () => {
  return (
    <Box bg="white" padding={2} marginRight="30vw" borderRadius={4}>
      <Heading as="h3" size="lg" textAlign={"left"}>
        Sales By Country
      </Heading>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Sales</Th>
              <Th isNumeric>Value</Th>
              <Th>Bounce</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>United States %</Td>
              <Td>2500</Td>
              <Td isNumeric>$214,000</Td>
              <Td>44,22%</Td>
            </Tr>
            <Tr>
              <Td>Germany</Td>
              <Td>3900</Td>
              <Td isNumeric>$446,700</Td>
              <Td>19,22%</Td>
            </Tr>
            <Tr>
              <Td>Great Britain</Td>
              <Td>1300</Td>
              <Td isNumeric>$121,900</Td>
              <Td>39,22%</Td>
            </Tr>
            <Tr>
              <Td>Brasil</Td>
              <Td>920</Td>
              <Td isNumeric>$52,100</Td>
              <Td>29,9%</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
