import * as Checkbox from '@radix-ui/react-checkbox'

import { Check, Trash } from 'phosphor-react'

export interface Task {
  id: string
  completed: boolean
  content: string
}

interface TaskProps {
  task: Task
  handleSetTasks: (task: Task) => void
  handleDeleteTask: (task: Task) => void
}

export function Task({ task, handleSetTasks, handleDeleteTask }: TaskProps) {

  const strikeText = task.completed ? "line-through text-gray-300" : ""
  
  function handleCompleteTask () {
    task.completed = !task.completed
    handleSetTasks(task)
  }

  return (
    <div className="flex items-start justify-between gap-3 p-4 bg-gray-500 rounded-lg ring-1 ring-gray-400">
      <div className="flex items-center justify-center w-6 h-6">
        <Checkbox.Root
          onClick={handleCompleteTask}
          checked={task.completed}
          className="group flex box-content items-center justify-center w-[0.875rem] h-[0.875rem] rounded-full border-blue border-2 hover:bg-blue-dark hover:bg-opacity-20 hover:border-blue-dark transition-colors"
        >
          <Checkbox.Indicator className="flex items-center justify-center w-[calc(100% + 4px)] h-[calc(100% + 4px)] rounded-full z-10 bg-purple-dark border-purple-dark border-2 group-hover:border-purple group-hover:bg-purple transition-all">
            <Check weight="bold" size={16} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <p className={`flex-1 text-[0.875rem] text-gray-100 ${strikeText}`}>
        {task.content}
      </p>
      <button
        onClick={() => handleDeleteTask(task)} 
        className="flex items-center justify-center w-6 h-6 text-gray-300 transition-all rounded hover:bg-gray-400 hover:text-danger"
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
