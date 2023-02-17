import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton({setOpenModal, openModal}) {
    const onClickButton = () => setOpenModal(!openModal);
    const hoistButton = () => openModal ? ' CreateTodoButton--hoisted' : '';
    return(
        <button
            className={"CreateTodoButton" + `${hoistButton()}`}
            onClick={() => onClickButton()}
        >
            <p>+</p>
        </button>   
    );
}

export {CreateTodoButton};