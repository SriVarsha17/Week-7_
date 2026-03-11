import React from 'react'
function TaskItem({task,deleteTask,toggle}) {
  return (
      <div className="flex items-center justify-between p-4 mb-3 border-2 bg-pink-300">
      {/* Left section: task details */}
      <div>
        <h2
          className={`font-semibold text-lg ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h2>
        <p className="text-sm text-gray-600">
          Priority: <span className="font-medium">{task.priority}</span>
        </p>
      </div>
      {/* Right section: buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => toggle(task)}
          className="px-3 py-1 border-2 bg-green-500 text-black"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task)}
          className="px-3 py-1 border-2 bg-red-500 text-black"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default TaskItem;