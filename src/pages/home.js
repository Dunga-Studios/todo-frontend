import React, { useState, useEffect } from "react";
import AddTodoComponent from "../components/ToDo/add-todo";
import { Button } from "react-bootstrap";
import { AddIcon } from "../components/icons";
import TodoListComponent from "../components/ToDo/todo-list";
import { Todos } from "./../configs/todos";
import HTTP_ACTIONS from "./../configs/http_request";

function HomePage() {
  const [show, setShow] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  const [reload, setReload] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllTodos();
  }, [show, reload]);

  const getAllTodos = async () => {
    let myTodos = await HTTP_ACTIONS.GetTodos();
    setTodoItems(myTodos);
  };

  const addTodoItem = (todo) => {
    HTTP_ACTIONS.CreateTodo(todo)
    // getAllTodos();
  };

  const removeTodoItem = (todo) => {
    HTTP_ACTIONS.DeleteTodo(todo.id);
    getAllTodos();
  };

  const editTodoItem = (todo) => {
    HTTP_ACTIONS.UpdateTodo(todo);
    setReload(!reload);
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col">
          <Button variant="primary" onClick={handleShow} className="float-end">
            <AddIcon /> New Todo
          </Button>
          <AddTodoComponent show={show} close={handleClose} add={addTodoItem} />
        </div>
      </div>

      <div className="row mt-4">
        <TodoListComponent
          todos={todoItems}
          remove={removeTodoItem}
          edit={editTodoItem}
        />
      </div>
    </div>
  );
}

export default HomePage;
