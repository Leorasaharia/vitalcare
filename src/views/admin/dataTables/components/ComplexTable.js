import {
  Flex,
  Icon,
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

// Assets
import { MdCancel, MdCheckCircle } from "react-icons/md";

// Sample data for the PharmacyTable
const columnsData = [
  {
    Header: "Drug Name",
    accessor: "drugName",
  },
  {
    Header: "Dosage",
    accessor: "dosage",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Expiration Date",
    accessor: "expirationDate",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const tableData = [
  {
    drugName: "Aspirin",
    dosage: "500mg",
    quantity: "120",
    expirationDate: "2025-08-15",
    status: "Available",
  },
  {
    drugName: "Tylenol",
    dosage: "325mg",
    quantity: "80",
    expirationDate: "2024-12-01",
    status: "Available",
  },
  {
    drugName: "Antibiotic X",
    dosage: "250mg",
    quantity: "50",
    expirationDate: "2024-10-30",
    status: "Out of Stock",
  },
  {
    drugName: "Vitamin C",
    dosage: "1000mg",
    quantity: "200",
    expirationDate: "2026-03-20",
    status: "Available",
  },
  {
    drugName: "Cough Syrup",
    dosage: "200ml",
    quantity: "30",
    expirationDate: "2024-07-15",
    status: "Out of Stock",
  },
];

export default function PharmacyTable() {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => tableData, []);

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
  initialState.pageSize = 5;

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
          Pharmacy Table
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
                  if (cell.column.Header === "Drug Name") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "Dosage") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "Quantity") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "Expiration Date") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "Status") {
                    data = (
                      <Flex align='center'>
                        <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            cell.value === "Available"
                              ? "green.500"
                              : cell.value === "Out of Stock"
                              ? "red.500"
                              : null
                          }
                          as={
                            cell.value === "Available"
                              ? MdCheckCircle
                              : cell.value === "Out of Stock"
                              ? MdCancel
                              : null
                          }
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
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
