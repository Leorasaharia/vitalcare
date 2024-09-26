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
        Header: "RECORD TYPE",
        accessor: "recordType",
      },
      {
        Header: "DETAILS",
        accessor: "details",
      },
    ],
    []
  );

  const leoraEHRData = useMemo(
    () => [
      {
        recordType: "Identification Data",
        details: "Leora Saharia, DOB: Jan 1, 1995, Female, Address: 123 Main St.",
      },
      {
        recordType: "Medical History",
        details: "Past conditions: None, Family History: Hypertension",
      },
      {
        recordType: "Medications and Allergies",
        details: "Allergic to Penicillin, No current medications",
      },
      {
        recordType: "Vital Signs",
        details: "Latest BP: 120/80, Recorded on 2023-08-10",
      },
      {
        recordType: "Visit Records",
        details: "Last visit: 2023-08-10 for annual check-up",
      },
      {
        recordType: "Immunizations",
        details: "Flu vaccine received on 2022-10-15",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns: columnsData,
      data: leoraEHRData,
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
  initialState.pageSize = 6; // Set the page size to 6 as we have 6 types of records

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction="column"
      w="100%"
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
          Leora Saharia's E-Records
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
