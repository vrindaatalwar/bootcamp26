//Some Imports 
import { useState } from 'react'
import Header from './components/header'
import ExpenseForm from './components/form'
import ExpenseList from './components/list'
import ExpenseStats from './components/stats'
import SearchBar from './components/search'


function App() {
 
  // Array state - all expenses are stored in an array
  const [expenses, setExpenses] = useState([]);
  const [searchTerm,setSearchTerm]= useState('');
  const [initialBalance,setInitialBalance]=useState('');
  const [isBalanceSet,setIsBalanceSet]=useState(false);
  const [balanceInputValue,setBalanceInputValue]=useState('');
  // Add Expense - add a new expense to the array
  function handleAddExpense(newExpense) {
    
    setExpenses([...expenses, newExpense])
  }

  // Removing item using filter()
  function handleDeleteExpense(expenseId) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId)
    setExpenses(updatedExpenses)
  }

 const displayedExpenses=expenses.filter((expense)=>{
  if (!searchTerm) return true;
  return expense.description ? expense.description.toLowerCase().includes(searchTerm.toLowerCase()):false;
 });

  return (
    <div className="min-h-screen bg-sky-900 pt-6">
      <Header />
       <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      {!isBalanceSet && (
       <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto space-y-4 text-center">
  <h2 className="text-xl font-semibold text-gray-800">Enter Initial Balance</h2>
  <div className="flex flex-col sm:flex-row gap-3">
    
    <input
      type="number"
      value={balanceInputValue}
      onChange={(e) => setBalanceInputValue(e.target.value)}
      className="w-full border border-gray-400 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-sky-500"
      placeholder="e.g. 10000"
    />
  
    <button
      className="text-gray-900 px-4 py-2 rounded-md font-medium transition bg-yellow-200 hover:bg-yellow-300"
      onClick={() => {
        if (balanceInputValue !== '') {
          setInitialBalance(Number(balanceInputValue));
          setIsBalanceSet(true);
        }
      }}
    >
      Set
    </button>
    
  </div>
</div>
  )}

        <ExpenseForm onAddExpense={handleAddExpense} />

      
          <ExpenseList
            expenses={displayedExpenses}
            onDeleteExpense={handleDeleteExpense}
          />
       

        <ExpenseStats expenses={expenses} balanceInput={initialBalance} />
      </main>
    </div>
  )
}

export default App