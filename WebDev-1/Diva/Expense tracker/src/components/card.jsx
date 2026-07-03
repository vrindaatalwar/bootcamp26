function ExpenseCard({ expense, onDeleteExpense }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-1 hover:scale-105 transition-transform duration-300">

      <h3 className="text-lg font-semibold text-grey-900 flex justify-center">{expense.description}</h3>

      <p className="text-gray-600 flex justify-center">
        <span className="font-medium">Category:</span> {expense.category}
      </p>

      <p className="text-gray-600 flex justify-center">
        <span className="font-medium">Amount:</span> {expense.amount}
      </p>

     <p className="text-gray-600 flex justify-center">
        <span className="font-medium">Type:</span> {expense.type}
      </p>

 <p className="text-gray-600 flex justify-center">
        <span className="font-medium">Date:</span> {expense.date}
      </p>


        <button
          type="button"
          onClick={() => onDeleteExpense(expense.id)}
          className="flex-1 bg-yellow-200 text-gray py-2 px-3 rounded-md text-sm font-medium hover:bg-red-600"
        >
          Delete
        </button>
      </div>
  )
}

export default ExpenseCard