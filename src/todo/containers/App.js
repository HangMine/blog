import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";
import Footer from "../components/Footer";

const App = props => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default App;
