import { EmptyList } from "./components/EmptyList";
import { Logo } from "./components/Logo";
import { NewTask } from "./components/NewTask";

import { Task } from "./components/Task";
import { useEffect, useState } from "react";

export function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('todoTasks') || '[]')
    setTasks(res)
  },[])

  function saveToLocalStorage(item:Task[]) {
    localStorage.setItem('todoTasks', JSON.stringify(item))
  }

  function modifyTask (modifiedTask:Task) {
    const newTasks = tasks.map(task => {
      if (task.id === modifiedTask.id) {
        return modifiedTask
      }
      return task
    }) 

    setTasks(newTasks)
    saveToLocalStorage(newTasks)
  }

  function deleteTask (taskToDelete: Task) {
    const newTasks = tasks.filter(task => task.id !== taskToDelete.id)

    setTasks(newTasks)
    saveToLocalStorage(newTasks)
  }

  function handleCreateNewTask (task:Task) {
    const newTask = [...tasks]
    newTask.push(task)
    setTasks(newTask)
    saveToLocalStorage(newTask)
  }

  const numberOfCompletedTasks = tasks.reduce((acc, cur) => {
    if (cur.completed) acc ++
    return acc
  },0)

  const completedPercentage = (numberOfCompletedTasks / tasks.length * 100) + 3

  return (
    <div>
      <header className="flex items-center justify-center w-full h-[200px] bg-gray-700">
        <div>
          <Logo />
        </div>
      </header>
      <div className="flex flex-col max-w-[46rem] px-8 md:px-0 mx-auto -mt-[1.75rem]">
        <NewTask handleCreateNewTask={handleCreateNewTask}/>
        <div className="tasksPannel mt-[4rem] flex flex-col gap-6">
          
          {tasks.length > 0 && 
            <div className={`relative flex items-center justify-center w-full overflow-hidden rounded-lg h-14 ring-1 ring-gray-400 animate-fade-right animate-duration-500 animate-alternate animate-fill-backwards`}>
              <p className="text-gray-200 font-bold text-[0.875rem] z-20">
                {`${(completedPercentage - 3).toFixed(0)}%`}
              </p>
              <div className="absolute flex items-center justify-start w-full h-full">
                <div
                  className={`bg-gradient-to-r from-blue to-purple-dark to-90% z-10 h-full transition-all duration-1000`}
                  style={{width: `calc(${completedPercentage}%)`}}
                >
                </div>
              </div>
              <span
                className="w-44 h-44 bg-gray-600 absolute rounded-[40%] z-10 animate-liquid1 transition-all duration-1000"
                style={{left: `calc(${completedPercentage}% - 0.2rem)`}}
              />
              <span
                className="w-44 h-44 bg-gray-600 opacity-30 absolute rounded-[40%] z-10 animate-liquid2 transition-all duration-1000"
                style={{left: `calc(${completedPercentage}% - 0.9rem)`}}
              />
            </div>
          }

          <div className="flex justify-between grow transition-all duration-500">
            <p className="font-bold text-[0.875rem] text-blue">
              Tarefas criadas
              <span className="bg-gray-400 ml-2 text-gray-200 px-2 py-[0.125rem] rounded-full">
                {tasks.length}
              </span>
            </p>
            <p className="font-bold text-[0.875rem] text-purple">
              Concluídas
              <span className="bg-gray-400 ml-2 text-gray-200 px-2 py-[0.125rem] rounded-full">
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
                  modifyTask={modifyTask}
                  deleteTask={deleteTask}
                />
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}
