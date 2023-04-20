import * as Checkbox from '@radix-ui/react-checkbox';

import { Check, Trash } from "phosphor-react"

interface TaskProps {
  completed: boolean
  content: string
}

export function Task ({ completed, content }:TaskProps) {
  return (
    <div
      className="flex justify-between p-4 rounded-lg bg-gray-500"
    >
      <div className='w-6 h-6 flex items-center justify-center'>
        <Checkbox.Root
          checked={completed}
          className='group flex box-content items-center justify-center w-4 h-4 rounded-full border-blue border-2 hover:bg-blue-dark hover:bg-opacity-20 hover:border-blue-dark transition-colors'
        >
          <Checkbox.Indicator
            className='flex items-center justify-center w-[calc(100% + 4px)] h-full rounded-full
            z-10 bg-purple-dark border-purple-dark border-2 group-hover:border-purple group-hover:bg-purple transition-all'
          >
            <Check weight='bold' size={16}/>
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <p className='grow'>{content}</p>
      <Trash size={24}/>
    </div>
  )
}