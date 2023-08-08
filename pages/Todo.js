import React, { useState } from "react";
import {
  Heading,
  Center,
  Input,
  VStack,
  Divider,
  Button,
  HStack,
  Card,
  Text,
  Spacer,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";

const TodoForm = ({ onSubmit, taskText, onTaskTextChange, buttonText }) => (
  <form onSubmit={onSubmit}>
    <HStack>
      <Input
        placeholder="Enter Todo"
        focusBorderColor="teal.400"
        w="300px"
        value={taskText}
        onChange={(e) => onTaskTextChange(e.target.value)}
      />
      <Button colorScheme="teal" size="md" onClick={onSubmit}>
        {buttonText}
      </Button>
    </HStack>
  </form>
);

const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [editing, setEditing] = useState(null);

  const [todos, setTodos] = useState([
    { id: 1, task: "mani", complete: false },
    { id: 2, task: "praveen", complete: false },
    { id: 3, task: "revathi", complete: false },
    { id: 4, task: "abdhul", complete: false },
  ]);

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
                <Card key={todo.id} padding="20px" w="30vw">
                  <HStack>
                    <Text w="20vw">{todo.task}</Text>
                    <Spacer />
                    <IconButton
                      isRound={true}
                      variant="solid"
                      colorScheme="teal"
                      aria-label="Edit"
                      fontSize="20px"
                      icon={<EditIcon />}
                      onClick={() => handleEdit(todo)}
                    />
                    <IconButton
                      isRound={true}
                      variant="solid"
                      colorScheme="red"
                      aria-label="Delete"
                      fontSize="20px"
                      icon={<DeleteIcon />}
                      onClick={() => handleDelete(todo.id)}
                    />
                  </HStack>
                </Card>
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default Todo;
