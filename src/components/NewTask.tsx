import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./Task";

interface NewTaskProps {
  handleCreateNewTask: (task: Task) => void
}

export function NewTask ({handleCreateNewTask}:NewTaskProps) {

  const [taskContent, setTaskContent] = useState('')

  function handleNewTaskInput (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskContent(event.target.value)
  }

  function handleInvalidTask (event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function handleNewTask (event: FormEvent) {
    event.preventDefault()

    const newTask:Task = {
      id: uuidv4(),
      completed: false,
      content: taskContent
    }

    handleCreateNewTask(newTask)
    setTaskContent('')
  } 

  return (
    <form
      className="flex flex-1 gap-2"
      onSubmit={handleNewTask}
    >
      <input
        className="w-full text-base p-4 bg-gray-500 
        placeholder:text-gray-300 text-gray-100 rounded-lg focus:ring-1 
        ring-purple-dark transition-shadow"
        type="text"
        value={taskContent}
        onInvalid={handleInvalidTask}
        onChange={handleNewTaskInput}
        required
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 p-4 rounded-xl 
        bg-blue-dark hover:bg-blue font-bold text-[0.875rem] transition-colors"
      >
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}