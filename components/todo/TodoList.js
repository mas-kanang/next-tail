import React from "react";

function TodoList({ propsTodos }) {
  return (
    <>
      <h3>Daftar ToDo List</h3>
      <div className=" table-column items-start justify-start">
        {propsTodos.map((todo, i) => {
          return (
            <p key={i}>
              {i + 1}. {todo}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
