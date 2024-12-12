import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/todoList.css";

type Todo = {
  id: number;
  text: string; 
};

type TodoListComponentProps = {
  todos: Todo[];
  onAdd: () => void;
  onDelete: (id: number) => void;  // 新增的删除函数
};

const TodoListComponent: React.FC<TodoListComponentProps> = ({ todos, onAdd, onDelete }) => {
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");

  const handleEdit = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedText(text);
  };

  const handleSave = (id: number) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].text = editedText;
    }
    setEditingTodoId(null);
  };

  const handleDelete = (id: number) => {
    onDelete(id);  // 调用传递的删除函数
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editingTodoId === todo.id ? (
            <>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="todo-textarea"
                style={{ height: "250px" , width: "250px", resize: "none" , padding: "10px", fontSize: "24px"}}
              />
              <button onClick={() => handleSave(todo.id)} className="todo-save">
                Save
              </button>
            </>
          ) : (
            <>
              <div style={{ height: "250px" , width: "250px", padding: "10px", fontSize: "24px", position: "relative"}}>
                <ReactMarkdown className="todo-markdown">
                  {todo.text}
                </ReactMarkdown>
                <button 
                  onClick={() => handleDelete(todo.id)} 
                  className="todo-delete"
                > Delete
                </button>
              </div>
              <button onClick={() => handleEdit(todo.id, todo.text)} className="todo-edit" style={{fontSize: "16"}}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
      <div className="todo-add" onClick={onAdd}>
        +
      </div>
    </div>
  );
};

export default TodoListComponent;
