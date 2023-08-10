import React, { useState } from "react";
import { Heading, Center, VStack, Divider, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [editing, setEditing] = useState(null);

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      const newTodo = { id: nanoid(), task: taskText, complete: false };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setTaskText("");
    }
  };

  const handleDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleEdit = ({ id, task }) => {
    setTaskText(task);
    setEditing(id);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editing ? { ...todo, task: taskText } : todo
        )
      );
      setTaskText("");
      setEditing(null);
    }
  };

  return (
    <Center h="100vh">
      <Box h="60vh">
        <VStack spacing="4" w="400px">
          <Heading>My Todo App</Heading>
          <Divider />
          <TodoForm
            onSubmit={editing ? handleUpdate : handleAddTodo}
            taskText={taskText}
            onTaskTextChange={setTaskText}
            buttonText={editing ? "Update" : "Submit"}
          />
          {!editing && (
            <VStack spacing="4" w="40vw" h="60vh">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default Todo;
