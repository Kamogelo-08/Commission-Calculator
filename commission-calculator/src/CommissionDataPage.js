import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommissionDataPage.css';

const CommissionDataPage = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="commission-data-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <ul className="data-list">
        {filteredData.map((item, index) => (
          <li key={index} className="data-item">
            <div className="title">Consultant: {item.consultant}</div>
            <div className="value">Client Name: {item.clientName}</div>
            <div className="value">Job: {item.job}</div>
            {/* ... render other data properties */}
          </li>
        ))}
      </ul>
      <Link to="/">Go back to Calculator</Link>
    </div>
  );
};

export default CommissionDataPage;
