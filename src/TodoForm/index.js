import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    // setOpenModal(true);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
        // Evita que la pagina se recargue cuando hacemos submit en el formulario
        event.preventDefault();
        addTodo(newTodoValue);
        onCancel();
    };
    return(
        <form onSubmit={onSubmit} className="TodoForm">
            <label>Añade un TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-button-container">
                <button
                    type="button" 
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit" 
                >
                    Añadir
                </button>
            </div>
        </form>
   );
}

export { TodoForm };