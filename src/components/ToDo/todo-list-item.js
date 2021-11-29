import React,{ useState} from "react";
import { Card, Button } from "react-bootstrap";
import { DeleteIcon, EditIcon } from "../icons";
import EditTodoComponent from "./edit-todo";

function TodoListItemComponent(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const todo = props.todo;
  const edit = props.edit;

  const handleClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);

  return (
    <Card style={{ width: "18rem", height: "100%" }}>
      <Card.Body style={{ textAlign: "left", position: "relative" }}>
        <Card.Title>{todo.title}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{marginBottom: 31}}>{todo.notes}</Card.Text>
        {/* <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", bottom: 10, right: 10 }}>
          <div>
              <Button size="sm" variant="primary" onClick={handleOpen}>
            <EditIcon  size={15} color="#fff"/>
            Edit
          </Button>
          <Button size="sm" variant="danger" className="ms-2" onClick={() => {
              props.remove(todo)
          }}>
            <DeleteIcon size={15} color="#fff"/>
            Delete
          </Button>
          </div>
        </div>

        <EditTodoComponent show={showEditModal} close={handleClose} todo={todo} edit={edit}/>
      </Card.Body>
    </Card>
  );
}

export default TodoListItemComponent;
