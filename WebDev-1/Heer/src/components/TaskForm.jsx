import { useState } from 'react'


function TaskForm({ onAddTask }) {
  // Object state - one object holds all form field values
  const [formData, setFormData] = useState({
    task: '',
    status: '',
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
   
    const newTask = {
      id: Date.now(),
      title: formData.task,
      status: formData.status,
    }

    onAddTask(newTask)

    // Reset the form back to empty values
    setFormData({
      task: '',
      status: '',
      
    })
  }

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 transition-all duration-300 hover:shadow-md">
      <h2 className="text-xl font-bold  text-slate-900 mb-5 tracking-tight flex items-center gap-2">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Controlled input - value comes from state */}
        <div>
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="e.g. Do Laundry"
            required
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold shadow-sm hover:bg-slate-800 active:scale-[0.99] transition-all duration-200"
        >
          Add  New Task
        </button>
      </form>
    </section>
  )
}

export default TaskForm