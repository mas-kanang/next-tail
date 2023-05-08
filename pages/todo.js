import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import { useState } from "react";
import Layout from "../components/layout";

export default function ToDo() {
  const [todos, setTodos] = useState(["test"]);

  const formSubmitHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <>
      <Layout pageTitle="Todo Page">
        <div className="flex flex-col">
          <TodoForm propsSubmitHandler={formSubmitHandler} />
          <TodoList propsTodos={todos} />
        </div>
      </Layout>
    </>
  );
}
