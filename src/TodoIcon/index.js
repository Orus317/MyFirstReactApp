import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoIcon({
    semanticSymbol,
    
}) {
    const {
        completed,
        onComplete,
        onDelete
    } = useContext(TodoContext);
    return(
        <span
            className={`Icon Icon-check ${props.completed && 'Icon-check-activate'}`}
            onClick={props.onComplete}
        >
        V
        </span>
    );
}

export {TodoIcon};