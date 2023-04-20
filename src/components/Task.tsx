import * as Checkbox from '@radix-ui/react-checkbox'

import { Check, Trash } from 'phosphor-react'

interface TaskProps {
  completed: boolean
  content: string
}

export function Task({ completed, content }: TaskProps) {
  
  const strikeText = completed ? "line-through text-gray-300" : ""
  
  return (
    <div
      className="flex justify-between items-start p-4 gap-3 rounded-lg ring-1 
      ring-gray-400 bg-gray-500"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <Checkbox.Root
          checked={completed}
          className="group flex box-content items-center justify-center 
          w-[0.875rem] h-[0.875rem] rounded-full border-blue border-2 
          hover:bg-blue-dark hover:bg-opacity-20 hover:border-blue-dark 
          transition-colors"
        >
          <Checkbox.Indicator
            className="flex items-center justify-center w-[calc(100% + 4px)] 
            h-[calc(100% + 4px)] rounded-full z-10 bg-purple-dark 
            border-purple-dark border-2 group-hover:border-purple 
            group-hover:bg-purple transition-all"
          >
            <Check weight="bold" size={16} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <p className={`flex-1 text-[0.875rem] text-gray-100 ${strikeText}`}>{content}</p>
      <button
        className="flex items-center justify-center w-6 h-6 
      text-gray-300 hover:bg-gray-400 hover:text-danger rounded 
        transition-all"
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
