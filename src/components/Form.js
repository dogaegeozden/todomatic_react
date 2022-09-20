import React, { useState } from "react";

function currentDate() {
    let currentDate = new Date();
    let fullYear = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let fullMonth;
    if (month < 10) {
        fullMonth = `0${month}`;
    } else {
        fullMonth = `${month}`;
    }
    let fullDay = `${currentDate.getDate()}`
    let modifiedDateResult = `${fullYear}-${fullMonth}-${fullDay}`;

    return modifiedDateResult
}

// A component(self-contained, logical pieces of code) called Form that takes props(data) in. And, creates an interactive graphical user interface.
function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={handleChange}
            />
            <input
                type="date"
                id="deadLine"
                defaultValue={currentDate()}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
    );
}

export default Form;
