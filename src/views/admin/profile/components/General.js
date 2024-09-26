import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

export default function CheckTable(props) {
  const columnsData = useMemo(
    () => [
      {
        Header: "TEST PARAMETER",
        accessor: "testParameter",
      },
      {
        Header: "RESULT",
        accessor: "result",
      },
      {
        Header: "REFERENCE RANGE",
        accessor: "referenceRange",
      },
    ],
    []
  );

  const leoraPathologyData = useMemo(
    () => [
      { testParameter: "Glucose", result: "89 mg/dL", referenceRange: "70-100 mg/dL" },
      { testParameter: "Hemoglobin", result: "13.5 g/dL", referenceRange: "12-16 g/dL" },
      { testParameter: "WBC Count", result: "5.8 x10^3/uL", referenceRange: "4.5-11 x10^3/uL" },
      { testParameter: "Platelets", result: "250 x10^3/uL", referenceRange: "150-450 x10^3/uL" },
      { testParameter: "Cholesterol", result: "190 mg/dL", referenceRange: "Under 200 mg/dL" },
      { testParameter: "Triglycerides", result: "120 mg/dL", referenceRange: "Under 150 mg/dL" },
      { testParameter: "HDL Cholesterol", result: "55 mg/dL", referenceRange: "Over 40 mg/dL" },
      { testParameter: "LDL Cholesterol", result: "110 mg/dL", referenceRange: "Under 130 mg/dL" },
      { testParameter: "Creatinine", result: "0.9 mg/dL", referenceRange: "0.6-1.2 mg/dL" },
      { testParameter: "AST (SGOT)", result: "25 U/L", referenceRange: "10-35 U/L" },
      { testParameter: "ALT (SGPT)", result: "22 U/L", referenceRange: "7-56 U/L" },
      { testParameter: "Calcium", result: "9.6 mg/dL", referenceRange: "8.6-10.2 mg/dL" },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns: columnsData,
      data: leoraPathologyData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 12; // Adjust the page size to the number of test parameters

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction="column"
      w="100%" // Use a specific width if needed, e.g., "90%" or "1200px"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Leora Saharia's Pathology Test Results
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <Td
                    {...cell.getCellProps()}
                    key={index}
                    fontSize={{ sm: "14px" }}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    <Text color={textColor} fontSize="sm" fontWeight="700">
                      {cell.value}
                    </Text>
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
