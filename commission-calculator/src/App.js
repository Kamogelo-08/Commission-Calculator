import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommissionCalculator from './CommissionCalculator';
import CommissionDataPage from './CommissionDataPage';

const App = () => {
  const [commissionData, setCommissionData] = useState([]);

  const handleDataSubmit = (data) => {
    setCommissionData([...commissionData, data]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CommissionCalculator onSubmit={handleDataSubmit} />}
        />
        { <Route path="/commission-data" element={<CommissionDataPage data={commissionData} />} /> }
      </Routes>
    </Router>
  );
};

export default App;
