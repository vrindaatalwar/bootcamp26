import ExpenseCard from './card'

function ExpenseList({ expenses, onDeleteExpense }) {
  // Conditional rendering - no heroes recruited yet
  if (expenses.length === 0) 
    {
    return (
      <section className="text-center py-8">
        <p className="text-xl font-semibold text-yellow-200">
           No Expenses Added Yet.
        </p>
        <p className="text-white mt-2">Update your first Expense.</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">History</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            onDeleteExpense={onDeleteExpense}
          />
        ))}
      </div>
    </section>
  )
}

export default ExpenseList