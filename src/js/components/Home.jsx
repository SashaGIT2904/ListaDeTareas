import React, { useState } from "react";

const Home = () => {
  // Estado para guardar lo que el usuario escribe en el input
  const [inputValue, setInputValue] = useState("");

  // Estado para guardar la lista de tareas)
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>ToDoList Sasha</h1>

      <ul>
        {/* Primer li: el campo de entrada para añadir tareas */}
        <li>
          <input
            type="text"
            // Cada vez que el usuario escribe, actualizamos inputValue
            onChange={(e) => setInputValue(e.target.value)}
            // El valor del input siempre refleja el estado
            value={inputValue}
            // Si el usuario presiona "Enter", añadimos la tarea a la lista
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Agregamos la nueva tarea al arreglo de todos
                setTodos(todos.concat([inputValue]));
                // Limpiamos el input
                setInputValue("");
              }
            }}
            placeholder="Nueva tarea..."
          />
        </li>

        {/* Recorremos todas las tareas y las mostramos */}
        {todos.map((item, index) => (
          <li key={index}>
            {/* Texto de la tarea */}
            {item} {/* Botón de borrar con emoji 🗑️ */}
            <span
              style={{ cursor: "pointer" }} // para que se vea que se puede hacer clic
              onClick={() =>
                // Filtramos todas las tareas excepto la que coincide con el índice actual
                setTodos(
                  todos.filter((t, currentIndex) => index !== currentIndex)
                )
              }
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>

      {/* Contador de tareas pendientes */}
      <div>{todos.length} tareas pendientes</div>
    </div>
  );
};

export default Home;
