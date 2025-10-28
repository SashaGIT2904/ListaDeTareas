import React, { useState } from "react";

const Home = () => {
  // Estado para guardar lo que escribo
  const [inputValue, setInputValue] = useState("");

  // Estado para guardar la lista de tareas
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>ToDoList Sasha</h1>

      <ul>
        <li>
          <input
            type="text"
            // Cada vez que escribo, se actualiza el inputValue
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            // Si presiono "Enter", añado la nueva tarea
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const texto = inputValue.trim();
                if (texto === "") return;

                setTodos(todos.concat([texto]));

                setInputValue("");
              }
            }}
            placeholder="Nueva tarea..."
          />
        </li>

        {/* Si no hay tareas, muestro el mensaje pedido */}
        {todos.length === 0 && (
          <li className="empty">No hay tareas, añadir tareas</li>
        )}

        {todos.map((tarea, index) => (
          <li key={index}>
            {tarea}
            {/* Botón de eliminar tareas */}
            <button
              className="trash"
              title="Eliminar"
              onClick={() =>
                setTodos(
                  todos.filter((_, indiceActual) => index !== indiceActual)
                )
              }
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {/* Contador de tareas pendientes */}
      <div className="counter">{todos.length} tareas pendientes</div>
    </div>
  );
};

export default Home;
