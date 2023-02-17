import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    // using useState react hook
    // const [searchValue, setSearchValue] = React.useState('');
    // function to change the value whithin the paragraph
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return(
        <React.Fragment>
            <input 
                className="TodoSearch" 
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChange} 
            />
            {/* <p>{searchValue}</p> */}
        </React.Fragment>
    );
}

export {TodoSearch};