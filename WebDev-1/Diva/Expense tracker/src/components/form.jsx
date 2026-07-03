import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  // Object state - one object holds all form field values
  const [formData, setFormData] = useState({
    description: '',
    type:'',
    category: '',
    amount: '',
    date:'',
    
  })

  // Updating object state - spread the old object and change one field
  function handleInputChange(event) {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newExpense = {
      id: Date.now(),
      description: formData.description,
      type:formData.type,
      category: formData.category,
      amount: Number(formData.amount),
        date:formData.date,
    }

    onAddExpense(newExpense)

    // Reset the form back to empty values
    setFormData({
     
      description: '',
      type:'',
      category: '',
      amount: '',
      date:'',
    })
  }

  return (
    <section className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
       Add a new Expense.
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Controlled input - value comes from state */}

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
          Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-800 rounded-md px-3 py-2"
            placeholder="e.g. Notebook"
          />
        </div>

<div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
           Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-800 rounded-md px-3 py-2"
          >
            <option value="">Select Transition Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
           Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-800 rounded-md px-3 py-2"
          >
            <option value="">Select a category</option>
            <option value="Housing & Bills">Housing & Bills</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Lifestyle & Fun">Lifestyle & Fun</option>
            <option value="Investments">Investments</option>
             <option value="Salary">Salary</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
           Amount Spent/Received
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
            min="1"
            max="100000"
            className="w-full border border-gray-800 rounded-md px-3 py-2"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
          Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-800 rounded-md px-3 py-2"
            placeholder="DD/MM/YY"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-200 text-gray-900 py-2 px-4 rounded-md font-medium hover:bg-yellow-400"
        >
        Add Expense
        </button>
      </form>
    </section>
  )
}

export default ExpenseForm