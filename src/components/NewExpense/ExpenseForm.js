import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEneteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEneteredTitle(event.target.value);
    console.log(enteredTitle);
    // setUserInput({
    //   ...userInput,
    //   enterendTitle: event.target.value,
    // });
    // setUserInput((prev) => {
    //   return { ...prev, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEneteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterendAmount : event.target.value,
    // });
    // setUserInput((prev) => {
    //   return { ...prev, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEneteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterendDate: event.target.value,
    // });
    // setUserInput((prev) => {
    //   return { ...prev, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEneteredTitle('');
    setEneteredAmount('');
    setEneteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0,01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
