import React, { useState } from 'react';

const Form = ( { addTodo } ) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        addTodo({title: inputValue, completed: false});
        setInputValue("")
    }

    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"  
                        placeholder="Apa yang ingin dilakukan?"
                        />
                        </div>
                    <div className="column one wide"><button type="submit" className="ui button circular icon blue"><i className="white plus icon"></i></button></div>
                </div>
            </div>
        </form>
    )
}

export default Form;