import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './CommissionCalculator.css';


const CommissionCalculator = () => {
  const [consultant, setConsultant] = useState('');
  const [clientName, setClientName] = useState('');
  const [job, setJob] = useState('');
  const [salaryType, setSalaryType] = useState('pa');
  const [salaryValue, setSalaryValue] = useState('');
  const [salaryPerHour, setSalaryPerHour] = useState('');
  const [workingHoursPerDay, setWorkingHoursPerDay] = useState('');
  const [workingDaysPerMonth, setWorkingDaysPerMonth] = useState('');
  const [workingMonths, setWorkingMonths] = useState('');
  const [commissionPercent, setCommissionPercent] = useState('');
  const [recruitmentCommissionPercent, setRecruitmentCommissionPercent] = useState('');
  const [totalSalary, setTotalSalary] = useState('');
  const [commission, setCommission] = useState('');
  const [recruitmentCommission, setRecruitmentCommission] = useState('');
  const [salaryAfterDeduction, setSalaryAfterDeduction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform calculations based on the input values
    let calculatedTotalSalary = 0;
    if (salaryType === 'pa') {
      calculatedTotalSalary = salaryValue;
    } else if (salaryType === 'pm') {
      calculatedTotalSalary = salaryValue * workingMonths;
    } else if (salaryType === 'ph') {
      calculatedTotalSalary = salaryPerHour * workingHoursPerDay * workingDaysPerMonth * workingMonths;
    }

    const calculatedCommission = (calculatedTotalSalary * commissionPercent) / 100;
    const calculatedRecruitmentCommission = (calculatedTotalSalary * recruitmentCommissionPercent) / 100;
    const calculatedSalaryAfterDeduction = calculatedTotalSalary - calculatedCommission;

    setTotalSalary(calculatedTotalSalary);
    setCommission(calculatedCommission);
    setRecruitmentCommission(calculatedRecruitmentCommission);
    setSalaryAfterDeduction(calculatedSalaryAfterDeduction);
  };

  return (
    <div className="commission-calculator">
      <h2>Interdot Commission Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="consultant">Consultant:</label>
          <input
            type="text"
            id="consultant"
            value={consultant}
            onChange={(e) => setConsultant(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job">Job:</label>
          <input
            type="text"
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salaryType">Salary:</label>
          <select
            id="salaryType"
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
          >
            <option value="pa">P.a.</option>
            <option value="pm">Pm</option>
            <option value="ph">/h</option>
          </select>
        </div>

        {salaryType === 'pa' && (
          <div className="form-group">
            <label htmlFor="paInput">Salary per annum:</label>
            <input
              type="number"
              id="paInput"
              value={salaryValue}
              onChange={(e) => setSalaryValue(e.target.value)}
            />
          </div>
        )}

        {salaryType === 'pm' && (
          <div className="form-group">
            <label htmlFor="pmInput">Salary per month:</label>
            <input
              type="number"
              id="pmInput"
              value={salaryValue}
              onChange={(e) => setSalaryValue(e.target.value)}
            />
            <label htmlFor="monthsInput">Working months:</label>
            <input
              type="number"
              id="monthsInput"
              value={workingMonths}
              onChange={(e) => setWorkingMonths(e.target.value)}
            />
          </div>
        )}

        {salaryType === 'ph' && (
          <div className="form-group">
            <label htmlFor="phInput">Salary per hour:</label>
            <input
              type="number"
              id="phInput"
              value={salaryPerHour}
              onChange={(e) => setSalaryPerHour(e.target.value)}
            />
            <label htmlFor="hoursInput">Working hours per day:</label>
            <input
              type="number"
              id="hoursInput"
              value={workingHoursPerDay}
              onChange={(e) => setWorkingHoursPerDay(e.target.value)}
            />
            <label htmlFor="daysInput">Working days per month:</label>
            <input
              type="number"
              id="daysInput"
              value={workingDaysPerMonth}
              onChange={(e) => setWorkingDaysPerMonth(e.target.value)}
            />
            <label htmlFor="monthsInput">Working months:</label>
            <input
              type="number"
              id="monthsInput"
              value={workingMonths}
              onChange={(e) => setWorkingMonths(e.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="commission">Commission (%):</label>
          <input
            type="number"
            id="commission"
            value={commissionPercent}
            onChange={(e) => setCommissionPercent(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="recruitmentCommission">Recruitment Consultant Commission (% of Total Salary):</label>
          <input
            type="number"
            id="recruitmentCommission"
            value={recruitmentCommissionPercent}
            onChange={(e) => setRecruitmentCommissionPercent(e.target.value)}
          />
        </div>

        <button type="submit">Calculate</button>

        {totalSalary !== '' && (
          <div>
            <div className="form-group">
              <label htmlFor="totalSalary">Total Salary:</label>
              <input type="text" id="totalSalary" value={totalSalary} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="commissionValue">Commission:</label>
              <input type="text" id="commissionValue" value={commission} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="recruitmentCommissionValue">Recruitment Consultant Commission:</label>
              <input type="text" id="recruitmentCommissionValue" value={recruitmentCommission} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="salaryAfterDeduction">Salary after deduction:</label>
              <input type="text" id="salaryAfterDeduction" value={salaryAfterDeduction} readOnly />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CommissionCalculator;
