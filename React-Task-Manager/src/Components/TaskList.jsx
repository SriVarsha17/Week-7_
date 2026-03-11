import TaskItem from "./TaskItem"

function TaskList({ tasks=[], deleteTask, toggle }) {
  return (
    <div className="p-5 m-10">
      {
        tasks.length===0?
        (
          <p>No task yet</p>
        ):
      tasks.map(task => 
      (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggle={toggle}
        />
      )
      )
      }
    </div>
  )
}

export default TaskList;