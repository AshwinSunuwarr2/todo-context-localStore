// import { useEffect, useState } from "react";
// import { TodoProvider } from "./Context";
// import { AddTodoForm, Todos } from "./Components";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   const toggleCompleted = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     );
//   };

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));

//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
//     >
//       <h1 className="text-center text-3xl font-bold font-sans text-red-500 drop-shadow-lg p-10">
//         Todo App
//       </h1>

//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <AddTodoForm />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             {todos.map((todo) => (
//               <div key={todo.id}>
//                 <Todos todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { AddTodoForm, Todos } from "./Components";

import { TodoProvider } from "./Context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prev) => (prev.id != id ? prev : todo)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <h1 className="text-center py-2 text-[2rem] text-orange-600/80 font-mono font-bold">
        TODOs
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div>
          <AddTodoForm />
        </div>
        <div className="mt-4">
          {todos.map((todo) => (
            <div key={todo.id}>
              <Todos todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
