import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default class AddTodoComponent extends Component {
  constructor() {
    super();
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  state = {
    title: "",
    notes: "",
  };

  addNewTodo() {
    this.props.add({
      title: this.state.title,
      notes: this.state.notes,
      date: new Date(),
    });
    this.setState({
        title:"",
        notes: ""
    })
    this.props.close();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Tittle"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.notes}
              onChange={(e) => {
                this.setState({
                  notes: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={this.addNewTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
