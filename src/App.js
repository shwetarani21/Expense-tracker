import React, {useState} from 'react'; 

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 12.2,
    date: new Date(2020, 5, 15)   
  },
  {
    id:'e2',
    title: 'New TV',
    amount: 294.67,
    date: new Date(2020, 4, 6)
  },
  { 
    id:'e3',
    title: 'car Tnsurance',
    amount: 189.26,
    date: new Date(2021, 7, 18)
  },
  { 
    id:'e4',
    title: 'New Desk',
    amount: 35.7,
    date: new Date(2021, 6, 22)
  },
];

const  App = () => {
 const [expenses, setExpenses] =  useState(DUMMY_EXPENSES);
 
  
  const addExpenseHandler = expense => {
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement.Element(Expenses, {items: expenses})
  //   );
  return (
    <div>
       <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
    
  );
}

export default App;
