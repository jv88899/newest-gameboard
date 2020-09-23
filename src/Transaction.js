import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({
  isActive,
  isPrevious,
  activeStep,
  transactionNumber,
  route,
  stepNumber,
  description,
  highlightCashTransactions,
  isCashTransaction
}) => {
  // console.log("active step is", activeStep);
  // console.log('highlight cash transactions', highlightCashTransactions)
  return (
    <Link
      to={`/${route}`}
      key={stepNumber}
      style={{
        color: `inherit`,
        textDecoration: `none`,
        cursor: `default`
      }}
    >
      <div
        className={
          activeStep === transactionNumber
            ? "transaction-items-headers transaction-active"
            : "transaction-items-headers"
        }
        style={highlightCashTransactions && isCashTransaction ? {backgroundColor: `green`} : null}
      >
        <span className="transaction-items-header-number">{stepNumber}</span>
        <span className="transaction-items-header-description">
          {description}
        </span>
      </div>
    </Link>
  );
};

export default Transaction;
