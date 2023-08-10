import React, { useState } from "react";
import {
  Heading,
  Center,
  VStack,
  Divider,
  Box,
  Text,
  IconButton,
  HStack,
  Spacer,
  Card,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import TodoForm from "@/components/TodoForm";

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

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
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
          {!editing && todos.length !== 0 && (
            <VStack spacing="4" w="40vw" h="60vh">
              {todos.map((todo) => (
                <Card key={todo.id} padding="20px" w="400px">
                  <HStack>
                    <Text
                      w="250px"
                      as={todo.complete ? "s" : "p"}
                      onClick={() => handleComplete(todo.id)}
                    >
                      {todo.task}
                    </Text>
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
