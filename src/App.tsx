import { EmptyList } from "./components/EmptyList";
import { Logo } from "./components/Logo";
import { NewTask } from "./components/NewTask";

import { v4 as uuidv4 } from 'uuid';
import { Task } from "./components/Task";
import { useState } from "react";

const tasksRaw = [
  {
    id: uuidv4(),
    completed: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus cumque voluptatem molestias, unde praesentium, aliquid inventore nisi optio saepe nihil nostrum, cum distinctio laudantium officia facilis obcaecati ea omnis.'
  },
  {
    id: uuidv4(),
    completed: false,
    content: 'Criar Tasks'
  }
]

export function App() {

  const [tasks, setTasks] = useState(tasksRaw)

  function handleSetTasks (completed:boolean, id:string) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !completed
        return task
      }
      return task
    })
    setTasks(newTasks)
  }

  const numberOfCompletedTasks = tasks.reduce((acc, cur) => {
    if (cur.completed) acc ++
    return acc
  },0)

  return (
    <div>
      <header className="flex items-center justify-center w-full h-[200px] bg-gray-700">
        <div>
          <Logo />
        </div>
      </header>
      <div className="flex flex-col max-w-[46rem] mx-auto -mt-[1.75rem]">
        <NewTask />
        <div className="tasksPannel mt-[4rem] flex flex-col gap-6">
          
          <div
            className="flex grow justify-between"
          >
            <p
              className="font-bold text-[0.875rem] text-blue"
            >
              Tarefas criadas
              <span
                className="bg-gray-400 ml-2 text-gray-200 px-2 py-[0.125rem] 
                rounded-full"
              >
                {tasks.length}
              </span>
            </p>
            <p
              className="font-bold text-[0.875rem] text-purple"
            >
              Concluídas
              <span
                className="bg-gray-400 ml-2 text-gray-200 px-2 py-[0.125rem] 
                rounded-full"
              >
                {`${numberOfCompletedTasks} de ${tasks.length}`}
              </span>
            </p>
          </div>

          { tasks.length === 0 
            ? <EmptyList /> 
            : tasks.map(task => {
              return (
                <Task 
                  task={task}
                  key={task.id}
                  handleSetTasks={handleSetTasks}
                />
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}
