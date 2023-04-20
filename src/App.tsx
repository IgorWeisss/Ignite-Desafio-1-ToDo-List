import { EmptyList } from "./components/EmptyList";
import { Logo } from "./components/Logo";
import { NewTask } from "./components/NewTask";

export function App() {

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
              Tarefas criadas <span className="bg-gray-400 text-gray-200 px-2 py-[0.125rem] rounded-full">0</span>
            </p>
            <p
              className="font-bold text-[0.875rem] text-purple"
            >
              Concluídas <span className="bg-gray-400 text-gray-200 px-2 py-[0.125rem] rounded-full">0</span>
            </p>
          </div>

          <EmptyList />
          
        </div>
      </div>
    </div>
  )
}
