import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({
  isActive,
  isPrevious,
  activeStep,
  transactionNumber,
  route,
  stepNumber,
  description
}) => {
  console.log("active step is", activeStep);
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
