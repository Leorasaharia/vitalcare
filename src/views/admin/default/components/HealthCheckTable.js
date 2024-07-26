import React from 'react';
import HealthCheckTable from './HealthCheckTable';

const columnsData = [
  {
    Header: 'NAME',
    accessor: 'name',
  },
  {
    Header: 'BLOOD PRESSURE',
    accessor: 'blood_pressure',
  },
  {
    Header: 'HEART RATE',
    accessor: 'heart_rate',
  },
  {
    Header: 'CHECKUP DATE',
    accessor: 'checkup_date',
  },
  {
    Header: 'COMMENTS',
    accessor: 'comments',
  },
];

const tableData = [
  {
    name: 'John Doe',
    blood_pressure: '120/80',
    heart_rate: 70,
    checkup_date: '2024-07-26',
    comments: 'Healthy',
  },
  {
    name: 'Jane Smith',
    blood_pressure: '130/85',
    heart_rate: 75,
    checkup_date: '2024-07-25',
    comments: 'Minor Issues',
  },
  // Add more patient records here
];

export default function App() {
  return <HealthCheckTable columnsData={columnsData} tableData={tableData} />;
}
