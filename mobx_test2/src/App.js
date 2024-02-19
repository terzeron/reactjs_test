import './App.css';
import TodoListView from './TodoListView';
import TodoList from "./TodoList";
import Todo from "./Todo";
import * as React from "react";

// https://ko.mobx.js.org/the-gist-of-mobx.html
function App() {
  const store = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
  ]);

  return (
    <div className="App">
      <TodoListView todoList={store}/>
    </div>
  );
}

export default App;
