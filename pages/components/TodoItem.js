import React from "react";
import { Card, Text, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo, onEdit, onDelete, onComplete }) => {
  return (
    <Card padding="20px" w="400px">
      <HStack>
        <Text
          w="250px"
        //   as={todo.complete ? "s" : "p"}
          onClick={() => onComplete(todo.id)}
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
          onClick={() => onEdit(todo)}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="Delete"
          fontSize="20px"
          icon={<DeleteIcon />}
          onClick={() => onDelete(todo.id)}
        />
      </HStack>
    </Card>
  );
};

export default TodoItem;
