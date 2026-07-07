
function ExpenseStats({ expenses ,balanceInput }) {
  // Calculating statistics using reduce()
  const totalExpenses = expenses.length;
  //Reduce is a method that takes a callback function and an initial value and returns a single value.
  const totalSpent= expenses.reduce((sum, expense) => {
    if(expense.type=="Expense")
    return sum + Number(expense.amount);
  else
    return sum;
  }, 0)

  const totalEarned= expenses.reduce((sum1, expense) => {
    if(expense.type=="Income")
    return sum1 + Number(expense.amount);
  else
    return sum1;
  },0)

  //to calculate current bank balance
  const bankBalance= expenses.reduce((sum2,expense)=> {
    const amt=Number(expense.amount);
    if(expense.type=="Income"){
      return sum2+amt; 
    } else if (expense.type=="Expense"){
       return sum2-amt;
    }
    return balanceInput;
  } ,Number(balanceInput)||0) 

 
return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-yellow-200 rounded-2xl p-4 w-32px">
          <p className="text-2xl font-bold text-gray-900">{totalExpenses}</p>
          <p className="text-md text-gray-700 mt-1">Total Expenses</p>
        </div>

        <div className="bg-yellow-200 rounded-2xl p-4 w-32px">
          <p className="text-2xl font-bold text-gray-900">{totalSpent}</p>
          <p className="text-md text-gray-700 mt-1">Total Amount Spent</p>
        </div>

          <div className="bg-yellow-200 rounded-2xl p-4 w-32px">
          <p className="text-2xl font-bold text-gray-900">{totalEarned}</p>
          <p className="text-md text-gray-700 mt-1">Total Amount Earned</p>
        </div>

        <div className="bg-yellow-200 rounded-2xl p-4 w-32px">
          <p className="text-2xl font-bold text-gray-900">{bankBalance}</p>
          <p className="text-md text-gray-700 mt-1">Bank Balance</p>
        </div>
      </div>
    </section>
  )
}

export default ExpenseStats