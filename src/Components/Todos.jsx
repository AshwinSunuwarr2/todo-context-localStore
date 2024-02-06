import React, { useRef, useState } from "react";
import { useTodo } from "../Context";

function Todos({ todo }) {
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo });
    setIsEditable(false);
  };

  const isComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={isComplete} />
      <input
        type="text"
        readOnly={!isEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        value={todoMsg}
        className={`border-black px-2 bg-red-100 rounded-sm ${
          todo.completed ? "line-through" : ""
        } ${
          isEditable ? "border-black/10 bg-orange-200" : "border-transparent"
        }`}
      />

      <button
        onClick={() => {
          if (todo.isComplete) return;
          if (isEditable) {
            editTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className={`${
          todo.completed ? "bg-red-300  text-white" : "bg-red-600"
        }`}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default Todos;
