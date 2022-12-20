import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          dropdownExpenseHandler={filterChangeHandler}
        />
        <ExpensesChart expenses = {filterExpenses}/>
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
