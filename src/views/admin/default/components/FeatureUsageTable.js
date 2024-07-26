import FeatureUsageTable from './FeatureUsageTable';

const columnsData = [
  {
    Header: 'FEATURE',
    accessor: 'feature',
  },
  {
    Header: 'USERS',
    accessor: 'users',
  },
  {
    Header: 'STATUS',
    accessor: 'status',
  },
];

const tableData = [
  {
    feature: 'Chatbot',
    users: 1200,
    status: 'Active',
  },
  {
    feature: 'BMI Tracker',
    users: 800,
    status: 'Active',
  },
  {
    feature: 'Diet Planner',
    users: 650,
    status: 'Active',
  },
  {
    feature: 'Doctor Consultations',
    users: 500,
    status: 'Active',
  },
  {
    feature: 'Exercise Tracker',
    users: 400,
    status: 'Inactive',
  },
  // Add more feature records here
];

export default function App() {
  return <FeatureUsageTable columnsData={columnsData} tableData={tableData} />;
}
