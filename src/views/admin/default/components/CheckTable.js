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

export default function CheckTable(props) {
  const columnsData = useMemo(
    () => [
      {
        Header: "PATIENT",
        accessor: "patient",
      },
      {
        Header: "BMI",
        accessor: "bmi",
      },
      {
        Header: "DIET PLAN",
        accessor: "dietPlan",
      },
      {
        Header: "CONSULTATION DATE",
        accessor: "consultationDate",
      },
      {
        Header: "FOLLOW-UP NEEDED",
        accessor: "followUpNeeded",
      },
    ],
    []
  );

  const tableData = useMemo(
    () => [
      {
        patient: ["John Doe", true],
        bmi: 22.5,
        dietPlan: "Low Carb",
        consultationDate: "2023-07-01",
        followUpNeeded: true,
      },
      {
        patient: ["Jane Smith", false],
        bmi: 28.1,
        dietPlan: "Keto",
        consultationDate: "2023-06-15",
        followUpNeeded: false,
      },
      {
        patient: ["Mark Johnson", true],
        bmi: 31.0,
        dietPlan: "Mediterranean",
        consultationDate: "2023-07-20",
        followUpNeeded: true,
      },
      {
        patient: ["Emily Brown", false],
        bmi: 24.7,
        dietPlan: "Paleo",
        consultationDate: "2023-05-30",
        followUpNeeded: false,
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns: columnsData,
      data: tableData,
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
  initialState.pageSize = 5;

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
          Patient E-Records
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
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "PATIENT") {
                    data = (
                      <Flex align="center">
                        <Checkbox
                          defaultChecked={cell.value[1]}
                          colorScheme="brandScheme"
                          me="10px"
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value[0]}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "BMI") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "DIET PLAN") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "CONSULTATION DATE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "FOLLOW-UP NEEDED") {
                    data = (
                      <Checkbox
                        isChecked={cell.value}
                        colorScheme="brandScheme"
                        isReadOnly
                      />
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
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
