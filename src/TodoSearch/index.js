import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    // using useState react hook
    // const [searchValue, setSearchValue] = React.useState('');
    // function to change the value whithin the paragraph
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