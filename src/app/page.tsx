"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import TodoListComponent from "@/components/todoList";
import Item from "@/components/item";

const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("En", { weekday: "long" }).format(date);
}

export default function Home() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: `New Todo ${todos.length + 1}` };
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));  // 过滤掉要删除的项
  };

  return (
    <div>
     
      <Sidebar>
        <h1>HOME page.</h1>
        <h1 style={{ fontSize: "24px" }}>To Do List for {formatDate(today)}</h1>
        <Item type="daily workout" isPacked={true} />
        <TodoListComponent todos={todos} onAdd={handleAddTodo} onDelete={handleDelete} />
      </Sidebar>
    </div>
  );
}
