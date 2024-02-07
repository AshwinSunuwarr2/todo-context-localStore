// import React, { useRef, useState } from "react";
// import { useTodo } from "../Context";

// function Todos({ todo }) {
//   const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

//   const [isEditable, setIsEditable] = useState(false);
//   const [todoMsg, setTodoMsg] = useState(todo.todo);

//   const editTodo = () => {
//     updateTodo(todo.id, { ...todo, todo });
//     setIsEditable(false);
//   };

//   const isComplete = () => {
//     toggleCompleted(todo.id);
//   };

//   return (
//     <div>
//       <input type="checkbox" checked={todo.completed} onChange={isComplete} />
//       <input
//         type="text"
//         readOnly={!isEditable}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         value={todoMsg}
//         className={`border-black px-2 bg-red-100 rounded-sm ${
//           todo.completed ? "line-through" : ""
//         } ${
//           isEditable ? "border-black/10 bg-orange-200" : "border-transparent"
//         }`}
//       />

//       <button
//         onClick={() => {
//           if (todo.isComplete) return;
//           if (isEditable) {
//             editTodo();
//           } else setIsEditable((prev) => !prev);
//         }}
//         disabled={todo.completed}
//         className={`${
//           todo.completed ? "bg-red-300  text-white" : "bg-red-600"
//         }`}
//       >
//         {isEditable ? "Save" : "Edit"}
//       </button>
//       <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//     </div>
//   );
// }

// export default Todos;

import React, { useState } from "react";
import { useTodo } from "../Context";

function Todos({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { toggleCompleted, deleteTodo, updateTodo } = useTodo();

  const [isEditable, setIsEditable] = useState(false);

  const isComplete = () => {
    toggleCompleted(todo.id);
  };

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(!isEditable);
  };

  return (
    <div className="flex justify-between items-center gap-2 shadow-lg w-[310px] rounded-md px-2 mt-2 py-1 bg-orange-400 md:w-[38rem] lg:w-[40rem]">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={isComplete}
        className="w-4 h-4 cursor-pointer"
      />

      <input
        type="textarea"
        value={todoMsg}
        readOnly={!isEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`${
          isEditable ? "border-black/50  bg-white " : ""
        } rounded-md px-1 border-[1px] border-white/0 outline-none bg-pink-200/40 transition duration-300 ease-in ${
          todo.completed ? "line-through bg-violet-100" : ""
        } w-full text-lg py-[5px] break-words`}
      />

      <div className="gap-2 flex">
        <button
          onClick={handleEdit}
          className={`${
            todo.completed ? "line-through bg-violet-400/90" : ""
          } shadow-md rounded-md bg-white/40 hover:bg-green-400/80 transition duration-300 ease-in h-7 w-7`}
          disabled={todo.completed}
        >
          {isEditable ? "🗃️" : "🖊️"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="transition duration-300 ease-in drop-shadow-md bg-white/40 rounded-md hover:bg-black/60  h-7 w-7"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todos;
