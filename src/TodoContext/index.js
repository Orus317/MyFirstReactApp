import React from "react";
import { useLocalStorage } from "./useLocalStorage";
// TodoContext es un objeto con dos props -> .Provider y .Consumer
const TodoContext = React.createContext();
// para establecer una conexión entre el provider y el consumer
function TodoProvider(props){
    const {
		// Así es como se renombran propery names que retorna una función
		item: todos, 
		saveItem: saveTodos, 
		loading,
		error
	} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);
	// who have the property completed
	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (searchValue.length <= 1){
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			// filtrar aquellos todos que cumplan las condiciones de búsqueda
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}
	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text: text,
		})
		saveTodos(newTodos);
	};
	const completeTodo = (text) =>{
		// OJO no se modifica todos directamente porque no se pueden modificar directamente los estados de React, da fallas y es una mala práctica
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};
	const deleteTodo = (text) =>{
		// OJO no se modifica todos directamente porque no se pueden modificar directamente los estados de React, da fallas y es una mala práctica
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};
    return (
        // esto debe envolver a toda la aplicacion
        // Con value indicamos qué es lo que vamos a compartir o qué es lo que se compartirá con el estado compartido
        <TodoContext.Provider value={{
            loading,
			error,
			totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			addTodo,
			completeTodo,
			deleteTodo,
			openModal,
			setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
