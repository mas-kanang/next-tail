import React, { useState } from "react";

function TodoForm(props) {
  const [inputTodo, setInputTodo] = useState("");
  console.log(inputTodo);
  const inputOnChangeHandler = (event) => {
    setInputTodo(event.target.value);
  };
  const localSubmitHandler = (event) => {
    event.preventDefault();
    props.propsSubmitHandler(inputTodo);
    setInputTodo("");
  };
  const resetHandler = (event) => {
    event.preventDefault();
    setInputTodo("");
  };
  return (
    <form onSubmit={localSubmitHandler} className="tengah-atas">
      <div className=" mb-1">
        <label className=" mr-1" htmlFor="todoButton">
          Input Kerjaan baru
        </label>
        <input
          type="text"
          name="todo-button"
          id="todoButton"
          value={inputTodo}
          onChange={inputOnChangeHandler}
          className="bg-slate-400"
        />
      </div>
      <div className="m-6">
        <button type="submit" className="tombol-save mr-4">
          Tambah Todo
        </button>
        <button onClick={resetHandler} type="reset" className="tombol-reset">
          Reset Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
