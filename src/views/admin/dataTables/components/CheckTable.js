/* eslint-disable */
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

export default function VisitsAndConsultationsTable() {
  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: "VISIT ID",
        accessor: "visitId",
      },
      {
        Header: "PATIENT ID",
        accessor: "patientId",
      },
      {
        Header: "DATE OF VISIT",
        accessor: "dateOfVisit",
      },
      {
        Header: "TYPE OF VISIT",
        accessor: "typeOfVisit",
      },
      {
        Header: "DIAGNOSIS",
        accessor: "diagnosis",
      },
      {
        Header: "TREATMENT PROVIDED",
        accessor: "treatment",
      },
      {
        Header: "FOLLOW-UP REQUIRED",
        accessor: "followUpRequired",
        Cell: ({ value }) => (
          <Checkbox isReadOnly isChecked={value === 'Yes'} />
        ),
      },
      {
        Header: "NOTES",
        accessor: "notes",
      },
    ],
    []
  );

  // Define demo data without healthcare provider
  const data = useMemo(
    () => [
      {
        visitId: "V001",
        patientId: "P001",
        dateOfVisit: "2024-01-15",
        typeOfVisit: "Routine check-up",
        diagnosis: "Hypertension",
        treatment: "Medication updated",
        followUpRequired: "Yes",
        notes: "Follow-up in 3 months",
      },
      {
        visitId: "V002",
        patientId: "P002",
        dateOfVisit: "2023-12-10",
        typeOfVisit: "Emergency",
        diagnosis: "Asthma attack",
        treatment: "Nebulization",
        followUpRequired: "No",
        notes: "Patient stable at discharge",
      },
      {
        visitId: "V003",
        patientId: "P003",
        dateOfVisit: "2023-11-20",
        typeOfVisit: "Consultation",
        diagnosis: "Diabetes",
        treatment: "Diet plan and insulin prescribed",
        followUpRequired: "Yes",
        notes: "Monitor blood sugar daily",
      },
      {
        visitId: "V004",
        patientId: "P004",
        dateOfVisit: "2023-10-30",
        typeOfVisit: "Routine check-up",
        diagnosis: "Migraine",
        treatment: "Prescription medication",
        followUpRequired: "No",
        notes: "Check back if symptoms persist",
      },
      {
        visitId: "V005",
        patientId: "P005",
        dateOfVisit: "2023-09-15",
        typeOfVisit: "Consultation",
        diagnosis: "Anxiety disorder",
        treatment: "Therapy and medication",
        followUpRequired: "Yes",
        notes: "Weekly therapy sessions required",
      },
      {
        visitId: "V006",
        patientId: "P006",
        dateOfVisit: "2023-08-22",
        typeOfVisit: "Emergency",
        diagnosis: "Fractured leg",
        treatment: "Cast applied, painkillers prescribed",
        followUpRequired: "Yes",
        notes: "Follow-up in 6 weeks for cast removal",
      },
      {
        visitId: "V007",
        patientId: "P007",
        dateOfVisit: "2023-07-10",
        typeOfVisit: "Routine check-up",
        diagnosis: "High cholesterol",
        treatment: "Lifestyle changes and medication",
        followUpRequired: "No",
        notes: "Follow-up in 6 months",
      },
      {
        visitId: "V008",
        patientId: "P008",
        dateOfVisit: "2023-06-01",
        typeOfVisit: "Consultation",
        diagnosis: "Back pain",
        treatment: "Physiotherapy recommended",
        followUpRequired: "Yes",
        notes: "Attend 5 physiotherapy sessions",
      },
      // Add more demo data if necessary
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data },
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

  initialState.pageSize = 10;  // Adjust the number of records per page as needed

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
          Visits and Consultations
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
                      {cell.render("Cell")}
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
