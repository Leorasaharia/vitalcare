/* eslint-disable */
import {
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
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function MedicalHistoryTable() {
  const columnsData = useMemo(
    () => [
      {
        Header: "PATIENT ID",
        accessor: "patientId",
      },
      {
        Header: "CONDITION NAME",
        accessor: "conditionName",
      },
      {
        Header: "DATE DIAGNOSED",
        accessor: "dateDiagnosed",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "FAMILY MEDICAL HISTORY",
        accessor: "familyHistory",
      },
      {
        Header: "NOTES",
        accessor: "notes",
      },
    ],
    []
  );

  const medicalHistoryData = useMemo(
    () => [
      {
        patientId: "001",
        conditionName: "Hypertension",
        dateDiagnosed: "2018-05-20",
        status: "Active",
        familyHistory: "Father has hypertension",
        notes: "Regular monitoring required",
      },
      {
        patientId: "002",
        conditionName: "Diabetes Type 2",
        dateDiagnosed: "2019-03-15",
        status: "Resolved",
        familyHistory: "No family history",
        notes: "Diet and exercise controlled",
      },
      {
        patientId: "003",
        conditionName: "Asthma",
        dateDiagnosed: "2020-07-22",
        status: "Active",
        familyHistory: "Mother has asthma",
        notes: "Uses inhaler as needed",
      },
      {
        patientId: "004",
        conditionName: "Chronic Kidney Disease",
        dateDiagnosed: "2019-11-07",
        status: "Active",
        familyHistory: "No family history",
        notes: "Requires routine dialysis",
      },
      {
        patientId: "005",
        conditionName: "Epilepsy",
        dateDiagnosed: "2021-02-14",
        status: "Active",
        familyHistory: "Uncle has epilepsy",
        notes: "Medication managed; occasional episodes",
      },
      {
        patientId: "006",
        conditionName: "Osteoporosis",
        dateDiagnosed: "2018-08-30",
        status: "Active",
        familyHistory: "Mother has osteoporosis",
        notes: "Calcium supplements prescribed",
      },
      {
        patientId: "007",
        conditionName: "Heart Disease",
        dateDiagnosed: "2017-12-25",
        status: "Active",
        familyHistory: "History of heart diseases in family",
        notes: "Regular cardiology check-ups",
      },
      {
        patientId: "008",
        conditionName: "Anxiety Disorder",
        dateDiagnosed: "2022-05-15",
        status: "Active",
        familyHistory: "Sister has anxiety",
        notes: "Therapy and medication in progress",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns: columnsData,
      data: medicalHistoryData,
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
  initialState.pageSize = 8; // Set to 8 to show all entries without pagination

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%">
          Medical History Records
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
                  borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400">
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
                    borderColor="transparent">
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
