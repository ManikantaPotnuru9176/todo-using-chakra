import React from "react";
import {
  VStack,
  Card,
  HStack,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TodoList = ({ todos, handleComplete, handleEdit, handleDelete }) => {
  return (
    <VStack spacing="4" w="40vw" h="60vh">
      {todos &&
        todos.map((todo) => (
          <Card
            key={todo.id}
            padding="20px"
            w="400px"
            onClick={() => handleComplete(todo.id)}
          >
            <HStack>
              <Text w="250px" as={todo.complete ? "s" : "p"}>
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
                onClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                  handleEdit(todo);
                }}
              />
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="red"
                aria-label="Delete"
                fontSize="20px"
                icon={<DeleteIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(todo.id);
                }}
              />
            </HStack>
          </Card>
        ))}
    </VStack>
  );
};

export default TodoList;
