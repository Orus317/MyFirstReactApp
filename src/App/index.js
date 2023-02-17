import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import './App.css';


// const defaultTodos = [
// 	{text: "Cortar cebolla", completed: true},
// 	{text: "Tomar el curso de cocina", completed: true},
// 	{text: "Llora con lo llorona", completed: false},
// ];




// Los parámetros de los componentes se les llama atributos (covención en react)
function App(props) {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
