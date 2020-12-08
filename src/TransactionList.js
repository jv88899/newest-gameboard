import React, { useState } from "react";
import Transaction from "./Transaction";

const TransactionList = ({
  activeStep,
  isActive,
  isPrevious,
  canHighlightCashTransactions
}) => {
  const [transactions, setTransactions] = useState([
    {
      stepNumber: `1`,
      transactionNumber: `001`,
      route: `001`,
      description: `Sale of $20 to customers for Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `003`,
      description: `Collect $20 cash from customers`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `006`,
      description: `Actual prescriptions filled for $2; claim received and paid`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `009`,
      description: `$11 of actual medical visits; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `011`,
      description: `Estimated claims for $2 not received for Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `013`,
      description: `Pay $10 of known medical claims`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `016`,
      description: `$1 payroll for Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `018`,
      description: `Pay $1 to Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `021`,
      description: `Owe $1 to brokers for selling Commercial, IFB, and Medicare policies`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `023`,
      description: `Pay postage bill of $1 for mailing annual enrollment materials to Medicare members for Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: t
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `026`,
      description: `Receive $10 cash from customers for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `029`,
      description: `Purchase of 401 and 301 Carlson Parkway buildings for $5`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `032`,
      description: `Buy investments (primarily bonds but some stocks) with excess cash of $6`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `14`,
      transactionNumber: `014`,
      route: `035`,
      description: `Receive an interest payment of $2 from bonds`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `15`,
      transactionNumber: `015`,
      route: `038`,
      description: `Pay premium taxes of $1 to the Minnesota Department of Revenue; Pay federal income taxes of $1 to the IRS`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    }
  ]);
  const [highlightCashTransactions, setHighlightCashTransactions] = useState(
    false
  );
  return (
    <div className="transaction-list-wrapper">
      <div className="transaction-list">
        <div className="transaction-items-headers">
          <span className="transaction-items-header-description bold center">
            <h3
              onClick={() => {
                if (canHighlightCashTransactions)
                  setHighlightCashTransactions(!highlightCashTransactions);
              }}
            >
              Year 1 Transactions
            </h3>
          </span>
        </div>
        {transactions.map(transaction => (
          <Transaction
            description={transaction.description}
            key={transaction.transactionNumber}
            transactionNumber={transaction.transactionNumber}
            route={transaction.route}
            activeStep={activeStep}
            stepNumber={transaction.stepNumber}
            highlightCashTransactions={highlightCashTransactions}
            isCashTransaction={transaction.isCashTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
