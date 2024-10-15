import "./App.css";
import "./index.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 3,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Chicken",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Carrots",
      amount: 4,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
