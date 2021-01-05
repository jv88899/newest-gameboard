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
      description: `Send invoice for $20 to customers for Year 1`,
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
      description: `Receive and pay claim for $2 for actual prescriptions filled`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: true
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `009`,
      description: `Receive claim for $11 of actual medical visits`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `011`,
      description: `Estimate claims for $2 not received for Year 1`,
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
      description: `Prepare $1 payroll for Medica’s employees`,
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
      description: `Receive invoice of $1 from brokers who sell Commercial, IFB, and Medicare policies`,
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
      isCashTransaction: true
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
      description: `Purchase 401 and 301 Carlson Parkway buildings for $5`,
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
      description: `Pay $1 of premium taxes to the MN Department of Revenue; Pay $1 in federal income taxes to the IRS`,
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
