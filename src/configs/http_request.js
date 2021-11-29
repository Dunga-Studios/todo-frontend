import axios from "axios";

const url = "http://localhost:5000";

const GetTodos = () =>
  new Promise((success, fail) => {
    axios
      .get(`${url}/todos`)
      .then(function (response) {
        success(response.data);
      })
      .catch(function (error) {
        fail(error);
      });
  });

const GetTodo = (id) =>
  new Promise((success, fail) => {
    axios
      .get(`${url}/todos/${id}`)
      .then(function (response) {
        success(response.data);
      })
      .catch(function (error) {
        fail(error);
      });
  });

const CreateTodo = (todo) =>
  new Promise((success, fail) => {
    axios
      .post(`${url}/todos`, todo)
      .then(function (response) {
        success(response.data);
      })
      .catch(function (error) {
        fail(error);
      });
  });

const UpdateTodo = (todo) =>
  new Promise((success, fail) => {
    axios
      .put(`${url}/todos`, todo)
      .then(function (response) {
        success(response.data);
      })
      .catch(function (error) {
        fail(error);
      });
  });

const DeleteTodo = (id) =>
  new Promise((success, fail) => {
    axios
      .delete(`${url}/todos/${id}`)
      .then(function (response) {
        success(response.data);
      })
      .catch(function (error) {
        fail(error);
      });
  });

const HTTP_ACTIONS = { GetTodo, GetTodos, CreateTodo, DeleteTodo, UpdateTodo };

export default HTTP_ACTIONS;
