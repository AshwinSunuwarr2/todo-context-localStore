// import React, { useState } from "react";
// import { useTodo } from "../Context";

// function AddTodoForm() {
//   const [todo, setTodo] = useState("");
//   const { addTodo } = useTodo();

//   const add = (e) => {
//     e.preventDefault();

//     if (!todo) return;

//     // addTodo({id: Date.now(), todo: todo, completed: false}) //can be used but remove id in App.js

//     addTodo({ todo, completed: false });
//     setTodo("");
//   };

//   return (
//     <form onSubmit={add} className="flex">
//       <input
//         type="text"
//         placeholder="Write todo..."
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//       >
//         Add
//       </button>
//     </form>
//   );
// }

// export default AddTodoForm;
import React, { useState } from "react";
import { useTodo } from "../Context";

function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
      }}
    >
      <input
        type="text"
        placeholder="Write todos.."
        className="border-[1px] border-black rounded-md py-2 px-2 w-[240px] md:w-[320px] lg:w-[350px]"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-500 font-semibold text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
