import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(false);

  const inputExpend = () => {
    setFlag((prev) => !prev);
  };
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {flag ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={inputExpend} />
      ) : (
        <button onClick={inputExpend}> Add Expenses Window</button>
      )}
    </div>
  );
};

export default NewExpense;
