import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal, Modal2 } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { LoadingModal, LoadingModal2 } from "../LoadingModal";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);
    return (
    // Solo una etiqueta por componente
	// React Fragment es una etiqueta fantasma que nos permite encapsular todo para evitar el error anterior
	<React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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
        <CreateTodoButton 
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        {/* {true && (
            <LoadingModal />
        )} */}
        {/* {loading && (
            <LoadingModal2 />
        )} */}

    </React.Fragment>
    );
}

export { AppUI };