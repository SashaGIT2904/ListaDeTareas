import { useState } from "react";

export default function Home() {
  // Estado del texto que estoy escribiendo en el input
  const [text, setText] = useState("");
  // Estado de la lista de tareas (cada tarea: { id, text, done })
  const [todos, setTodos] = useState([]);

  // Función para agregar una tarea cuando pulso Enter
  function add(e) {
    e.preventDefault(); // Evito que el form recargue la página (como en la clase de Jose David)
    const t = text.trim(); // Quito espacios al inicio y al final
    if (!t) return; // Si ha quedado vacío, no agrego nada
    // Agrego la nueva tarea al principio del array
    setTodos([{ id: Date.now(), text: t, done: false }, ...todos]);
    setText(""); // Limpio el input para escribir la siguiente tarea
  }

  // Función para marcar/desmarcar una tarea como hecha
  function toggle(id) {
    // Recorro todo el id con .map, cuando coincide, invierto el valor de done
    setTodos(todos.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  }

  // Función para eliminar una tarea por id
  function removeItem(id) {
    // Me quedo con todas menos la que tenga ese id
    setTodos(todos.filter((x) => x.id !== id));
  }

  // La interfaz del TodoList
  return (
    <div className="app">
      <h1>TodoList</h1>

      {/* Formulario que añade las tareas al presionar Enter */}
      <form className="form" onSubmit={add}>
        <input
          placeholder="Escribe y pulsa Enter"
          value={text}
          onChange={(e) => setText(e.target.value)} // Actualizo "text" cada vez que escribo
        />
      </form>

      {/* Si no hay tareas, muestro el mensaje. Si hay, muestro la lista */}
      {todos.length === 0 ? (
        <p>No hay tareas, añadir tareas</p> // Mensaje cuando la lista está vacía y no añadí nada
      ) : (
        <ul className="list">
          {todos.map((item) => (
            <li key={item.id} className="todo">
              <input
                type="checkbox"
                checked={item.done} // Este checkbox refleja si la tarea está hecha o no
                onChange={() => toggle(item.id)} // al marcar/desmarcar, invierto el estado done
              />
              {/* Si la tarea está hecha, agrego la clase done para tacharla con mi CSS */}
              <span className={item.done ? "text done" : "text"}>
                {item.text}
              </span>
              {/* Botón para borrar.
                  Lo tengo oculto por defecto y solo aparece al pasar el ratón (hover). */}
              <button className="del" onClick={() => removeItem(item.id)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
