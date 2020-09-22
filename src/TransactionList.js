import React, { useState } from "react";
import { Link } from "react-router-dom";
import Transaction from './Transaction'

const TransactionList = ({ activeStep, isActive, isPrevious}) => {
  const [transactions, setTransactions] = useState([
    {
      stepNumber: `1`,
      transactionNumber: `001`,
      route: `001`,
      description: `Sale of $20 to customers for Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `002`,
      description: `Collect $18 cash from customers`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `003`,
      description: `Actual prescriptions filled for $2; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `004`,
      description: `$11 of actual medical expenses for visits; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `005`,
      description: `Estimated claims for $2 not received for Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `006`,
      description: `$12 payment for pharmacy claims and known medical claims`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `007`,
      description: `$1 payroll for Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `008`,
      description: `Paid $1 to Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `009`,
      description: `Owe $1 to brokers for selling Commercial, IFB, and Medicare policies`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `010`,
      description: `Receive bill of $1 from KSTP for ad space for "We've got you covered" commercials`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `011`,
      description: `$10 cash received from customer for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `012`,
      description: `Purchase of 401 and 301 Carlson Parkway buildings for $5`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `013`,
      description: `Pay $1 of premium taxes to the Minnesota Department of Revenue`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `14`,
      transactionNumber: `014`,
      route: `014`,
      description: `Buy investments (primarily bonds but some stocks) with excess cash of $6`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `15`,
      transactionNumber: `015`,
      route: `015`,
      description: `Receive a very generous dividend of $4`,
      activeStep: null,
      previousStep: null,
      visible: true
    },
    {
      stepNumber: `16`,
      transactionNumber: `016`,
      route: `016`,
      description: `Pay federal income taxes of $1 to the IRS`,
      activeStep: null,
      previousStep: null,
      visible: true
    }
  ]);
  console.log('props', activeStep)
  return (
    <div className="transaction-list-wrapper">
      <h2>Transaction List</h2>
      <div className="transaction-list">
        <div className="transaction-items-headers">
          <span className="transaction-items-header-number">#</span>
          <span className="transaction-items-header-description">
            Description
          </span>
        </div>
        {transactions.map(transaction => (
          <Transaction
            description={transaction.description}
            key={transaction.transactionNumber}
            stepNumber={transaction.stepNumber}
            route={transaction.route}
            isActive={isActive}
            isPrevious={isPrevious}
            activeStep={activeStep}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
