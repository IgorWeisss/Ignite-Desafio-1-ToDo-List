import { Clipboard } from "./Clipboard";

export function EmptyList () {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 
    border-t-[1px] border-gray-400 gap-4">
      <Clipboard />
      <p className="text-[1rem] text-gray-300">
        <span className="font-bold">Você ainda não tem tarefas cadastradas</span>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}