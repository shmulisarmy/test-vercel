"use client";

import Image from "next/image";
import { useState } from "react";


type Todo = {
  // A unique identifier for the todo item
  id: number; 
  // The description or title of the task
  task: string;
  // Whether the task has been completed or not
  isCompleted: boolean; 
};


const todos: Todo[] = [
  {
    id: 1,
    task: "Buy groceries",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Finish TypeScript tutorial",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Call the bank",
    isCompleted: false,
  }
];
export default function Home() {
  const [shownTodos, setShownTodos] = useState(todos);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        {shownTodos.map((todo, index) => (
          <div key={todo.id} className="flex items-center gap-2 p-2 border-b">
            <span>{todo.task}</span>
            <span>{todo.isCompleted ? 'Completed' : 'Pending'}</span>
            <button 
              onClick={() => {
                setShownTodos(prev => prev.filter((_, i) => i !== index));
              }}
              className="px-2 py-1 bg-red-500 text-white text-xs rounded"
            >
              Hide
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
