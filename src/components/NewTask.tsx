import { PlusCircle } from "phosphor-react";

export function NewTask () {
  return (
    <form className="flex flex-1 gap-2">
      <input
        className="w-full text-base p-4 bg-gray-500 
        placeholder:text-gray-300 text-gray-100 rounded-lg focus:ring-1 
        ring-purple-dark transition-shadow"
        type="text"
        placeholder="Adicione uma nova tarefa" 
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 p-4 rounded-xl 
        bg-blue-dark focus:bg-blue font-bold text-[0.875rem] transition-colors"
      >
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}