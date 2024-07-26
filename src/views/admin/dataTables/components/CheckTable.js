import {
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
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

export default function CheckTable() {
  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "TYPE",
        accessor: "type",
      },
      {
        Header: "DATE",
        accessor: "date",
      },
      {
        Header: "RESULT",
        accessor: "result",
      },
      {
        Header: "NOTES",
        accessor: "notes",
      },
    ],
    []
  );

  // Define demo data
  const data = useMemo(
    () => [
      {
        name: "John Doe",
        type: "X-ray",
        date: "2024-01-15",
        result: "Normal",
        notes: "No issues found",
      },
      {
        name: "Jane Smith",
        type: "CT Scan",
        date: "2023-12-10",
        result: "Abnormal",
        notes: "Follow-up required",
      },
      {
        name: "Emily Davis",
        type: "MRI",
        date: "2023-11-05",
        result: "Normal",
        notes: "No issues found",
      },
      {
        name: "Michael Brown",
        type: "ECG",
        date: "2023-10-22",
        result: "Normal",
        notes: "Routine check",
      },
      {
        name: "Sarah Johnson",
        type: "EEG",
        date: "2023-09-15",
        result: "Abnormal",
        notes: "Further evaluation needed",
      },
      {
        name: "David Wilson",
        type: "Eye Test",
        date: "2023-08-30",
        result: "Normal",
        notes: "Vision is fine",
      },
      // Add more demo data as needed
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
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

  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Health Records
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
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
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "NAME") {
                    data = (
                      <Flex align='center'>
                        <Checkbox
                          defaultChecked={false}
                          colorScheme='brandScheme'
                          me='10px'
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "RESULT") {
                    data = (
                      <Text
                        me='10px'
                        color={textColor}
                        fontSize='sm'
                        fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
