import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import './App.css';


const defaultTodos = [
	{text: "Cortar cebolla", completed: true},
	{text: "Tomar el curso de cocina", completed: true},
	{text: "Llora con lo llorona", completed: false},
];


// Los parámetros de los componentes se les llama atributos (covención en react)
function App(props) {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');
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

	const completeTodo = (text) =>{
		// OJO no se modifica todos directamente porque no se pueden modificar directamente los estados de React, da fallas y es una mala práctica
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};

	const deleteTodo = (text) =>{
		// OJO no se modifica todos directamente porque no se pueden modificar directamente los estados de React, da fallas y es una mala práctica
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
	// Solo una etiqueta por componente
	// React Fragment es una etiqueta fantasma que nos permite encapsular todo para evitar el error anterior
	<React.Fragment>
		<TodoCounter 
			total={totalTodos}
			completed={completedTodos}
		/>
		<TodoSearch 
			searchValue={searchValue}
			setSearchValue = {setSearchValue}
		/>
		<TodoList>
		{searchedTodos.map(todo => (
			<TodoItem 
				key={todo.text} 
				text={todo.text}
				completed={todo.completed}
				onComplete={() => completeTodo(todo.text)}
				onDelete={() => deleteTodo(todo.text)}
			/>
		))}
		</TodoList>
		<CreateTodoButton />
	</React.Fragment>
	);
}

export default App;
